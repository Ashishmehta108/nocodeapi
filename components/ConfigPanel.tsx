import React from 'react';
import { useBuilderStore } from '../lib/store';
import { AnyNodeData } from '../types';

export default function ConfigPanel() {
  const { selectedNode, updateNodeData } = useBuilderStore();

  if (!selectedNode) {
    return (
      <aside className="w-80 bg-card border-l border-border p-8 flex flex-col justify-center items-center text-muted-foreground text-center h-full shadow-sm z-10">
        <div className="border border-dashed border-border rounded-lg p-6 bg-background/50">
          <p className="text-sm">Select a node on the canvas to configure its properties.</p>
        </div>
      </aside>
    );
  }

  const data = selectedNode.data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateNodeData(selectedNode.id, { [name]: value });
  };

  const inputClasses = "w-full bg-background border border-input rounded-md p-2 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all";
  const labelClasses = "block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide";

  return (
    <aside className="w-80 bg-card border-l border-border p-5 flex flex-col h-full overflow-y-auto shadow-sm z-10">
      <h2 className="text-foreground font-semibold mb-6 flex items-center gap-2 pb-4 border-b border-border">
        Configure <span className="text-primary">{data.label}</span>
      </h2>

      <div className="space-y-5">
        {/* Label - Common for all */}
        <div>
          <label className={labelClasses}>Node Label</label>
          <input
            type="text"
            name="label"
            value={data.label}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        {/* HTTP Trigger Specific */}
        {data.type === 'http_trigger' && (
          <>
            <div>
              <label className={labelClasses}>Method</label>
              <select
                name="method"
                value={(data as any).method}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
                <option value="PATCH">PATCH</option>
              </select>
            </div>
            <div>
              <label className={labelClasses}>Route Path</label>
              <input
                type="text"
                name="path"
                value={(data as any).path}
                onChange={handleChange}
                placeholder="/api/users"
                className={`${inputClasses} font-mono text-xs`}
              />
            </div>
          </>
        )}

        {/* DB Query Specific */}
        {data.type === 'db_query' && (
          <>
            <div>
              <label className={labelClasses}>Database Type</label>
              <select
                name="dbType"
                value={(data as any).dbType}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="postgres">Postgres</option>
                <option value="mongodb">MongoDB</option>
              </select>
            </div>
            <div>
              <label className={labelClasses}>Operation</label>
              <select
                name="operation"
                value={(data as any).operation}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="find">Find / Select</option>
                <option value="insert">Insert</option>
                <option value="update">Update</option>
                <option value="delete">Delete</option>
                <option value="custom">Custom Query</option>
              </select>
            </div>
            <div>
              <label className={labelClasses}>Table / Collection</label>
              <input
                type="text"
                name="collectionOrTable"
                value={(data as any).collectionOrTable || ''}
                onChange={handleChange}
                placeholder="users"
                className={`${inputClasses} font-mono text-xs`}
              />
            </div>
          </>
        )}

        {/* Auth Guard Specific */}
        {data.type === 'auth_guard' && (
          <div>
            <label className={labelClasses}>Strategy</label>
            <select
              name="strategy"
              value={(data as any).strategy}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="jwt">JWT Bearer</option>
              <option value="basic">Basic Auth</option>
              <option value="oauth2">OAuth2</option>
            </select>
          </div>
        )}

        {/* Validator Specific */}
        {data.type === 'validator' && (
          <div>
            <label className={labelClasses}>Zod Schema</label>
            <textarea
              name="schema"
              value={(data as any).schema}
              onChange={handleChange}
              rows={4}
              className={`${inputClasses} font-mono text-xs`}
            />
          </div>
        )}

        {/* Response Formatter Specific */}
        {data.type === 'response_formatter' && (
          <div>
            <label className={labelClasses}>Status Code</label>
            <input
              type="number"
              name="statusCode"
              value={(data as any).statusCode}
              onChange={(e) => updateNodeData(selectedNode.id, { statusCode: parseInt(e.target.value, 10) })}
              className={`${inputClasses} font-mono text-xs`}
            />
          </div>
        )}

        {/* Webhook Specific */}
        {data.type === 'webhook' && (
          <div>
            <label className={labelClasses}>Event Name</label>
            <input
              type="text"
              name="event"
              value={(data as any).event}
              onChange={handleChange}
              placeholder="stripe.charge.succeeded"
              className={`${inputClasses} font-mono text-xs`}
            />
          </div>
        )}

        {/* Redis Cache Specific */}
        {data.type === 'redis_cache' && (
          <>
            <div>
              <label className={labelClasses}>Action</label>
              <select name="action" value={(data as any).action} onChange={handleChange} className={inputClasses}>
                <option value="get">GET (Check Cache)</option>
                <option value="set">SET (Write Cache)</option>
                <option value="delete">DELETE (Invalidate)</option>
              </select>
            </div>
            <div>
              <label className={labelClasses}>Key Pattern</label>
              <input type="text" name="keyPattern" value={(data as any).keyPattern} onChange={handleChange} placeholder="user:{id}" className={`${inputClasses} font-mono text-xs`} />
            </div>
            <div>
              <label className={labelClasses}>TTL (Seconds)</label>
              <input type="number" name="ttlSeconds" value={(data as any).ttlSeconds} onChange={(e) => updateNodeData(selectedNode.id, { ttlSeconds: parseInt(e.target.value, 10) })} className={`${inputClasses} font-mono text-xs`} />
            </div>
          </>
        )}

        {/* Rate Limiter Specific */}
        {data.type === 'rate_limiter' && (
          <>
            <div>
              <label className={labelClasses}>Max Requests</label>
              <input type="number" name="maxRequests" value={(data as any).maxRequests} onChange={(e) => updateNodeData(selectedNode.id, { maxRequests: parseInt(e.target.value, 10) })} className={`${inputClasses} font-mono text-xs`} />
            </div>
            <div>
              <label className={labelClasses}>Time Window (Minutes)</label>
              <input type="number" name="windowMinutes" value={(data as any).windowMinutes} onChange={(e) => updateNodeData(selectedNode.id, { windowMinutes: parseInt(e.target.value, 10) })} className={`${inputClasses} font-mono text-xs`} />
            </div>
          </>
        )}

        {/* S3 Upload Specific */}
        {data.type === 's3_upload' && (
          <>
            <div>
              <label className={labelClasses}>Bucket Name</label>
              <input type="text" name="bucketName" value={(data as any).bucketName} onChange={handleChange} placeholder="my-app-uploads" className={`${inputClasses} font-mono text-xs`} />
            </div>
            <div>
              <label className={labelClasses}>ACL Access</label>
              <select name="acl" value={(data as any).acl} onChange={handleChange} className={inputClasses}>
                <option value="private">Private</option>
                <option value="public-read">Public Read</option>
              </select>
            </div>
          </>
        )}

        {/* BullMQ Job Specific */}
        {data.type === 'bullmq_job' && (
          <>
            <div>
              <label className={labelClasses}>Queue Name</label>
              <input type="text" name="queueName" value={(data as any).queueName} onChange={handleChange} placeholder="image-processing" className={`${inputClasses} font-mono text-xs`} />
            </div>
            <div>
              <label className={labelClasses}>Job Name</label>
              <input type="text" name="jobName" value={(data as any).jobName} onChange={handleChange} placeholder="resizeImage" className={`${inputClasses} font-mono text-xs`} />
            </div>
          </>
        )}

        {/* Send Email Specific */}
        {data.type === 'send_email' && (
          <>
            <div>
              <label className={labelClasses}>Email Provider</label>
              <select name="provider" value={(data as any).provider} onChange={handleChange} className={inputClasses}>
                <option value="resend">Resend</option>
                <option value="sendgrid">SendGrid</option>
                <option value="smtp">Nodemailer (SMTP)</option>
              </select>
            </div>
            <div>
              <label className={labelClasses}>Subject Line</label>
              <input type="text" name="subject" value={(data as any).subject} onChange={handleChange} placeholder="Welcome to our app!" className={`${inputClasses} font-mono text-xs`} />
            </div>
          </>
        )}

      </div>
    </aside>
  );
}

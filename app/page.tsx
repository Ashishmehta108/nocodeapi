// // "use client";

// // import Link from "next/link";
// // import { ThemeToggle } from "../components/ThemeToggle";
// // import {
// //   Flash,
// //   ArrowRight,
// //   Code,
// //   ShieldTick,
// //   Cpu,
// //   Hierarchy,
// //   ExportSquare,
// //   Export,
// //   Cloud,
// // } from "iconsax-reactjs";

// // export default function Home() {
// //   return (
// //     <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-black/10 dark:selection:bg-white/20 font-sans transition-colors duration-300">
// //       {/* Subtle top gradient */}
// //       <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-zinc-100/50 to-white dark:from-zinc-900/40 dark:to-black pointer-events-none transition-colors duration-300" />

// //       {/* Navigation */}
// //       <nav className="relative z-10 border-b border-black/5 dark:border-white/5 bg-white/50 dark:bg-black/50 backdrop-blur-md transition-colors duration-300">
// //         <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
// //           <div className="flex items-center gap-2">
// //             <div className="w-6 h-6 rounded bg-black dark:bg-white flex items-center justify-center transition-colors duration-300">
// //               <span className="dark:hidden">
// //                 <Flash size={14} color="#FFF" variant="Bold" />
// //               </span>
// //               <span className="hidden dark:block">
// //                 <Flash size={14} color="#000" variant="Bold" />
// //               </span>
// //             </div>
// //             <span className="font-medium text-sm tracking-tight text-black dark:text-white transition-colors duration-300">NoCodeAPI</span>
// //           </div>
// //           <div className="flex items-center gap-6">
// //             <Link
// //               href="/builder"
// //               className="text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
// //             >
// //               Visual Builder
// //             </Link>
// //             <Link
// //               href="/builder"
// //               className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white dark:text-black bg-black dark:bg-white rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
// //             >
// //               Start Free
// //             </Link>
// //             <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />
// //             <div className="flex h-6 w-6 items-center gap-2">

// //               <ThemeToggle />
// //             </div>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Hero Section */}
// //       <main className="relative z-10 pt-32 pb-20">
// //         <div className="max-w-5xl mx-auto px-6 text-center">
// //           {/* Badge */}
// //           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 text-xs font-medium mb-8 transition-colors duration-300">
// //             <Flash size={12} color="#a1a1aa" variant="Bold" />
// //             V1.0 is now live
// //           </div>

// //           <h1 className="max-w-3xl mx-auto text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-black dark:text-white leading-[1.1] mb-6 transition-colors duration-300">
// //             Build production backend systems.
// //             <br className="hidden md:block" />
// //             <span className="text-zinc-500 dark:text-zinc-500">Without the boilerplate.</span>
// //           </h1>

// //           <p className="max-w-2xl mx-auto text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 transition-colors duration-300">
// //             Design scalable Node.js APIs visually. Generate enterprise-ready Express code with full
// //             TypeScript support, built-in validation, and zero lock-in. Ship straight to production.
// //           </p>

// //           <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
// //             <Link
// //               href="/builder"
// //               className="w-full sm:w-auto px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black font-medium text-sm rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
// //             >
// //               Launch Visual Builder
// //               <span className="dark:hidden">
// //                 <ArrowRight size={16} color="#FFF" variant="Bold" />
// //               </span>
// //               <span className="hidden dark:block">
// //                 <ArrowRight size={16} color="#000" variant="Bold" />
// //               </span>
// //             </Link>
// //             <a
// //               href="#features"
// //               className="w-full sm:w-auto px-6 py-2.5 bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white font-medium text-sm rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors border border-black/5 dark:border-white/5 flex items-center justify-center gap-2"
// //             >
// //               View Output Example
// //               <ExportSquare size={15} color="#a1a1aa" variant="Bold" />
// //             </a>
// //           </div>
// //         </div>

// //         {/* Code Preview Mockup */}
// //         <div className="mt-20 max-w-5xl mx-auto px-6 relative" id="features">
// //           <div className="absolute -inset-0.5 bg-gradient-to-b from-black/5 dark:from-white/10 to-transparent rounded-xl opacity-50 blur-sm mix-blend-overlay transition-colors duration-300" />
// //           <div className="relative rounded-xl border border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-[#0A0A0A] shadow-2xl overflow-hidden transition-colors duration-300">
// //             {/* Editor Header */}
// //             <div className="flex items-center px-4 py-2 border-b border-black/5 dark:border-white/5 bg-zinc-100 dark:bg-[#050505] transition-colors duration-300">
// //               <div className="flex gap-1.5">
// //                 <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800" />
// //                 <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800" />
// //                 <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800" />
// //               </div>
// //               <div className="mx-auto flex gap-6 text-[11px] font-mono text-zinc-500 tracking-wide">
// //                 <span className="text-black dark:text-white border-b border-black/20 dark:border-white/20 pb-2 -mb-2 transition-colors duration-300">src/index.ts</span>
// //                 <span className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors cursor-pointer pb-2 -mb-2">
// //                   src/routes.ts
// //                 </span>
// //               </div>
// //             </div>

// //             {/* Editor Split */}
// //             <div className="grid md:grid-cols-[1fr_300px] text-[13px] font-mono leading-relaxed h-[380px] sm:h-[360px]">
// //               {/* Left — Code */}
// //               <div className="border-r border-black/5 dark:border-white/5 p-6 bg-white dark:bg-[#0A0A0A] overflow-hidden transition-colors duration-300">
// //                 <pre className="text-zinc-600 dark:text-zinc-400 overflow-x-auto transition-colors duration-300">
// //                   <span className="text-blue-600 dark:text-blue-400">import</span>{" "}express{" "}
// //                   <span className="text-blue-600 dark:text-blue-400">from</span>{" "}
// //                   <span className="text-orange-600 dark:text-orange-300">'express'</span>;{"\n"}
// //                   <span className="text-blue-600 dark:text-blue-400">import</span>{" "}{"{ errorHandler }"}{" "}
// //                   <span className="text-blue-600 dark:text-blue-400">from</span>{" "}
// //                   <span className="text-orange-600 dark:text-orange-300">'./middleware'</span>;{"\n\n"}
// //                   <span className="text-blue-600 dark:text-blue-400">const</span>{" "}app ={" "}
// //                   <span className="text-zinc-900 dark:text-zinc-200">express</span>();{"\n"}
// //                   <span className="text-blue-600 dark:text-blue-400">const</span>{" "}PORT = process.env.PORT ||{" "}
// //                   <span className="text-purple-600 dark:text-purple-400">3000</span>;{"\n\n"}
// //                   <span className="text-zinc-400 dark:text-zinc-600">{"// Middleware injected cleanly"}</span>{"\n"}
// //                   app.<span className="text-zinc-900 dark:text-zinc-200">use</span>(express.<span className="text-zinc-900 dark:text-zinc-200">json</span>());{"\n\n"}
// //                   <span className="text-zinc-400 dark:text-zinc-600">{"// Auto-generated robust routes"}</span>{"\n"}
// //                   app.<span className="text-zinc-900 dark:text-zinc-200">post</span>(<span className="text-orange-600 dark:text-orange-300">'/api/v1/users'</span>,{" "}
// //                   <span className="text-blue-600 dark:text-blue-400">async</span>{" "}(req, res, next){" "}
// //                   <span className="text-blue-600 dark:text-blue-400">{"=>"}</span>{" "}{"{"}{"\n"}
// //                   {"  "}<span className="text-blue-600 dark:text-blue-400">try</span>{" "}{"{"}{"\n"}
// //                   {"    "}<span className="text-blue-600 dark:text-blue-400">const</span>{" "}data ={" "}
// //                   <span className="text-blue-600 dark:text-blue-400">await</span>{" "}UserSchema.<span className="text-zinc-900 dark:text-zinc-200">parseAsync</span>(req.body);{"\n"}
// //                   {"    "}<span className="text-blue-600 dark:text-blue-400">const</span>{" "}user ={" "}
// //                   <span className="text-blue-600 dark:text-blue-400">await</span>{" "}db.<span className="text-zinc-900 dark:text-zinc-200">insert</span>(users).<span className="text-zinc-900 dark:text-zinc-200">values</span>(data);{"\n"}
// //                   {"    "}res.<span className="text-zinc-900 dark:text-zinc-200">status</span>(<span className="text-purple-600 dark:text-purple-400">201</span>).<span className="text-zinc-900 dark:text-zinc-200">json</span>(user);{"\n"}
// //                   {"  "}{"} "}<span className="text-blue-600 dark:text-blue-400">catch</span>{" "}(error){" "}{"{"}{"\n"}
// //                   {"    "}<span className="text-zinc-900 dark:text-zinc-200">next</span>(error);{"\n"}
// //                   {"  "}{"}"}{"\n"}
// //                   {"}"});{"\n\n"}
// //                   app.<span className="text-zinc-900 dark:text-zinc-200">use</span>(errorHandler);{"\n\n"}
// //                   app.<span className="text-zinc-900 dark:text-zinc-200">listen</span>(PORT, (){" "}
// //                   <span className="text-blue-600 dark:text-blue-400">{"=>"}</span>{" "}
// //                   <span className="text-zinc-900 dark:text-zinc-200">console</span>.<span className="text-zinc-900 dark:text-zinc-200">log</span>(
// //                   <span className="text-orange-600 dark:text-orange-300">{"`"}🚀 Ready on port {"${PORT}"}{"`"}</span>));
// //                 </pre>
// //               </div>

// //               {/* Right — Feature list */}
// //               <div className="p-6 bg-zinc-50 dark:bg-[#050505] flex flex-col justify-center gap-6 font-sans transition-colors duration-300">
// //                 <div className="flex gap-3">
// //                   <Hierarchy size={16} color="#71717a" variant="Bold" className="shrink-0 mt-0.5" />
// //                   <div>
// //                     <h3 className="text-black dark:text-white font-medium text-[13px] mb-1 transition-colors duration-300">Visual Nodes</h3>
// //                     <p className="text-zinc-500 text-[12px] leading-snug">
// //                       Connect middleware, routing, and logic seamlessly.
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <div className="flex gap-3">
// //                   <ShieldTick size={16} color="#71717a" variant="Bold" className="shrink-0 mt-0.5" />
// //                   <div>
// //                     <h3 className="text-black dark:text-white font-medium text-[13px] mb-1 transition-colors duration-300">Type Safe</h3>
// //                     <p className="text-zinc-500 text-[12px] leading-snug">
// //                       ESM, async/await, and inherent Zod schema validations.
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <div className="flex gap-3">
// //                   <Export size={16} color="#71717a" variant="Bold" className="shrink-0 mt-0.5" />
// //                   <div>
// //                     <h3 className="text-black dark:text-white font-medium text-[13px] mb-1 transition-colors duration-300">Full Export</h3>
// //                     <p className="text-zinc-500 text-[12px] leading-snug">
// //                       Download a raw Express app and deploy to any cloud.
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </main>

// //       {/* Grid Features */}
// //       <section className="border-t border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-[#050505] py-20 transition-colors duration-300">
// //         <div className="max-w-5xl mx-auto px-6">
// //           <div className="grid md:grid-cols-3 gap-8">
// //             <div className="group">
// //               <div className="mb-4">
// //                 <Cloud size={20} color="#71717a" variant="Bold" />
// //               </div>
// //               <h3 className="text-sm font-semibold text-black dark:text-white mb-2 transition-colors duration-300">Instant Scalability</h3>
// //               <p className="text-zinc-500 text-xs leading-relaxed">
// //                 Design architectures suitable for enterprise scale with built-in best practices.
// //               </p>
// //             </div>
// //             <div className="group">
// //               <div className="mb-4">
// //                 <Code size={20} color="#71717a" variant="Bold" />
// //               </div>
// //               <h3 className="text-sm font-semibold text-black dark:text-white mb-2 transition-colors duration-300">Code First Approach</h3>
// //               <p className="text-zinc-500 text-xs leading-relaxed">
// //                 Readable backend code. No abstracted black box that holds your logic hostage.
// //               </p>
// //             </div>
// //             <div className="group">
// //               <div className="mb-4">
// //                 <Cpu size={20} color="#71717a" variant="Bold" />
// //               </div>
// //               <h3 className="text-sm font-semibold text-black dark:text-white mb-2 transition-colors duration-300">Automated Boilerplate</h3>
// //               <p className="text-zinc-500 text-xs leading-relaxed">
// //                 Let the graph infer TypeScript types, error handling, and standard configurations.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="border-t border-black/5 dark:border-white/5 bg-white dark:bg-black py-8 text-center text-xs text-zinc-600 transition-colors duration-300">
// //         <div className="flex items-center justify-center gap-2 mb-2">
// //           <Flash size={12} color="#71717a" variant="Bold" />
// //           <span className="font-medium text-zinc-500 dark:text-zinc-400 transition-colors duration-300">NoCodeAPI</span>
// //         </div>
// //         <p>© {new Date().getFullYear()} NoCodeAPI. Minimal by design.</p>
// //       </footer>
// //     </div>
// //   );
// // }

// "use client";

// import Link from "next/link";
// import { ThemeToggle } from "../components/ThemeToggle";
// import {
//   Flash,
//   ArrowRight,
//   Code,
//   ShieldTick,
//   Cpu,
//   Hierarchy,
//   ExportSquare,
//   Export,
//   Cloud,
// } from "iconsax-reactjs";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-black/10 dark:selection:bg-white/20 font-sans transition-colors duration-300">

//       {/* Subtle top gradient */}
//       <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-zinc-100/60 to-transparent dark:from-zinc-900/30 dark:to-transparent pointer-events-none transition-colors duration-300" />

//       {/* Navigation */}
//       <nav className="relative z-10 border-b border-black/[0.06] dark:border-white/[0.06] bg-white/70 dark:bg-black/70 backdrop-blur-xl transition-colors duration-300">
//         <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="w-6 h-6 rounded bg-black dark:bg-white flex items-center justify-center transition-colors duration-300">
//               <span className="dark:hidden">
//                 <Flash size={14} color="#FFF" variant="Bold" />
//               </span>
//               <span className="hidden dark:block">
//                 <Flash size={14} color="#000" variant="Bold" />
//               </span>
//             </div>
//             <span className="font-medium text-sm tracking-tight text-black dark:text-white transition-colors duration-300">NoCodeAPI</span>
//           </div>

//           <div className="flex items-center gap-6">
//             <Link
//               href="/builder"
//               className="text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-200"
//             >
//               Visual Builder
//             </Link>
//             <Link
//               href="/builder"
//               className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white dark:text-black bg-black dark:bg-white rounded-md hover:bg-zinc-700 dark:hover:bg-zinc-100 transition-colors duration-200"
//             >
//               Start Free
//             </Link>
//             <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />
//             <div className="flex h-6 w-6 items-center gap-2">
//               <ThemeToggle />
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <main className="relative z-10 pt-32 pb-20">
//         <div className="max-w-5xl mx-auto px-6 text-center">

//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.04] text-zinc-500 dark:text-zinc-400 text-xs font-medium mb-8 transition-colors duration-300">
//             <Flash size={12} color="#a1a1aa" variant="Bold" />
//             V1.0 is now live
//           </div>

//           <h1 className="max-w-3xl mx-auto text-4xl sm:text-5xl md:text-[58px] font-semibold tracking-[-0.02em] text-black dark:text-white leading-[1.08] mb-6 transition-colors duration-300">
//             Build production backend systems.
//             <br className="hidden md:block" />
//             <span className="text-zinc-400 dark:text-zinc-600">Without the boilerplate.</span>
//           </h1>

//           <p className="max-w-xl mx-auto text-[15px] text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10 transition-colors duration-300">
//             Design scalable Node.js APIs visually. Generate enterprise-ready Express code with full
//             TypeScript support, built-in validation, and zero lock-in.
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
//             <Link
//               href="/builder"
//               className="group w-full sm:w-auto px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black font-medium text-sm rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-200 flex items-center justify-center gap-2"
//             >
//               Launch Visual Builder
//               <span className="dark:hidden transition-transform duration-200 group-hover:translate-x-0.5">
//                 <ArrowRight size={15} color="#FFF" variant="Bold" />
//               </span>
//               <span className="hidden dark:block transition-transform duration-200 group-hover:translate-x-0.5">
//                 <ArrowRight size={15} color="#000" variant="Bold" />
//               </span>
//             </Link>
//             <a
//               href="#features"
//               className="group w-full sm:w-auto px-5 py-2.5 bg-transparent text-zinc-600 dark:text-zinc-400 font-medium text-sm rounded-lg hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900/80 transition-all duration-200 border border-black/[0.08] dark:border-white/[0.08] flex items-center justify-center gap-2"
//             >
//               View Output Example
//               <ExportSquare size={14} color="currentColor" variant="Bold" className="opacity-50 group-hover:opacity-80 transition-opacity duration-200" />
//             </a>
//           </div>
//         </div>

//         {/* Code Preview Mockup */}
//         <div className="mt-20 max-w-5xl mx-auto px-6 relative" id="features">
//           <div className="relative rounded-xl border border-black/[0.07] dark:border-white/[0.07] bg-zinc-50 dark:bg-[#0A0A0A] overflow-hidden transition-colors duration-300">

//             {/* Editor Header */}
//             <div className="flex items-center px-4 py-2.5 border-b border-black/[0.06] dark:border-white/[0.06] bg-zinc-100/80 dark:bg-[#050505] transition-colors duration-300">
//               <div className="flex gap-1.5">
//                 <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800" />
//                 <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800" />
//                 <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800" />
//               </div>
//               <div className="mx-auto flex gap-6 text-[11px] font-mono text-zinc-500 tracking-wide">
//                 <span className="text-black dark:text-white border-b border-black/20 dark:border-white/20 pb-2 -mb-2 transition-colors duration-300">src/index.ts</span>
//                 <span className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors cursor-pointer pb-2 -mb-2">
//                   src/routes.ts
//                 </span>
//               </div>
//             </div>

//             {/* Editor Split */}
//             <div className="grid md:grid-cols-[1fr_280px] text-[13px] font-mono leading-relaxed h-[550px]">
//               <div className="border-r border-black/[0.06] dark:border-white/[0.06] p-6 bg-white dark:bg-[#0D0D0D] overflow-hidden transition-colors duration-300">
//                 <pre className="text-zinc-600 dark:text-[#6B7280] overflow-x-auto transition-colors duration-300 text-[13px] leading-relaxed">

//                   {/* import express from 'express'; */}
//                   <span className="text-[#7C3AED] dark:text-[#C792EA]">import</span>{" "}
//                   <span className="text-zinc-800 dark:text-[#E2E8F0]">express</span>{" "}
//                   <span className="text-[#7C3AED] dark:text-[#C792EA]">from</span>{" "}
//                   <span className="text-[#0F766E] dark:text-[#9EECC4]">'express'</span>;{"\n"}

//                   {/* import { errorHandler } from './middleware'; */}
//                   <span className="text-[#7C3AED] dark:text-[#C792EA]">import</span>{" "}
//                   <span className="text-zinc-700 dark:text-[#CBD5E1]">{"{ errorHandler }"}</span>{" "}
//                   <span className="text-[#7C3AED] dark:text-[#C792EA]">from</span>{" "}
//                   <span className="text-[#0F766E] dark:text-[#9EECC4]">'./middleware'</span>;{"\n\n"}

//                   {/* const app = express(); */}
//                   <span className="text-[#0369A1] dark:text-[#7DD3FC]">const</span>{" "}
//                   <span className="text-zinc-800 dark:text-[#E2E8F0]">app</span>{" "}
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">=</span>{" "}
//                   <span className="text-[#B45309] dark:text-[#FCD34D]">express</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">();</span>{"\n"}

//                   {/* const PORT = process.env.PORT || 3000; */}
//                   <span className="text-[#0369A1] dark:text-[#7DD3FC]">const</span>{" "}
//                   <span className="text-zinc-800 dark:text-[#E2E8F0]">PORT</span>{" "}
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">=</span>{" "}
//                   <span className="text-zinc-600 dark:text-[#94A3B8]">process.env.</span>
//                   <span className="text-zinc-800 dark:text-[#E2E8F0]">PORT</span>{" "}
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">||</span>{" "}
//                   <span className="text-[#B45309] dark:text-[#FB923C]">3000</span>;{"\n\n"}

//                   {/* // comment */}
//                   <span className="text-zinc-400 dark:text-[#4B5563] italic">{"// Middleware injected cleanly"}</span>{"\n"}
//                   <span className="text-zinc-800 dark:text-[#E2E8F0]">app</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
//                   <span className="text-[#B45309] dark:text-[#FCD34D]">use</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
//                   <span className="text-zinc-800 dark:text-[#E2E8F0]">express</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
//                   <span className="text-[#B45309] dark:text-[#FCD34D]">json</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">());</span>{"\n\n"}

//                   {/* // comment */}
//                   <span className="text-zinc-400 dark:text-[#4B5563] italic">{"// Auto-generated robust routes"}</span>{"\n"}
//                   <span className="text-zinc-800 dark:text-[#E2E8F0]">app</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
//                   <span className="text-[#B45309] dark:text-[#FCD34D]">post</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
//                   <span className="text-[#0F766E] dark:text-[#9EECC4]">'/api/v1/users'</span>,{" "}
//                   <span className="text-[#7C3AED] dark:text-[#C792EA]">async</span>{" "}
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
//                   <span className="text-[#0369A1] dark:text-[#93C5FD]">req</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">,</span>{" "}
//                   <span className="text-[#0369A1] dark:text-[#93C5FD]">res</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">,</span>{" "}
//                   <span className="text-[#0369A1] dark:text-[#93C5FD]">next</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">)</span>{" "}
//                   <span className="text-[#7C3AED] dark:text-[#C792EA]">{"=>"}</span>{" "}
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">{"{"}</span>{"\n"}

//                   {"  "}
//                   <span className="text-[#7C3AED] dark:text-[#C792EA]">try</span>{" "}
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">{"{"}</span>{"\n"}

//                   {"    "}
//                   <span className="text-[#0369A1] dark:text-[#7DD3FC]">const</span>{" "}
//                   <span className="text-zinc-800 dark:text-[#E2E8F0]">data</span>{" "}
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">=</span>{" "}
//                   <span className="text-[#7C3AED] dark:text-[#C792EA]">await</span>{" "}
//                   <span className="text-zinc-700 dark:text-[#CBD5E1]">UserSchema</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
//                   <span className="text-[#B45309] dark:text-[#FCD34D]">parseAsync</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
//                   <span className="text-zinc-800 dark:text-[#E2E8F0]">req</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">.body);</span>{"\n"}

//                   {"    "}
//                   <span className="text-[#0369A1] dark:text-[#7DD3FC]">const</span>{" "}
//                   <span className="text-zinc-800 dark:text-[#E2E8F0]">user</span>{" "}
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">=</span>{" "}
//                   <span className="text-[#7C3AED] dark:text-[#C792EA]">await</span>{" "}
//                   <span className="text-zinc-700 dark:text-[#CBD5E1]">db</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
//                   <span className="text-[#B45309] dark:text-[#FCD34D]">insert</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
//                   <span className="text-zinc-800 dark:text-[#E2E8F0]">users</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">).</span>
//                   <span className="text-[#B45309] dark:text-[#FCD34D]">values</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
//                   <span className="text-zinc-800 dark:text-[#E2E8F0]">data</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">);</span>{"\n"}

//                   {"    "}
//                   <span className="text-zinc-800 dark:text-[#E2E8F0]">res</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
//                   <span className="text-[#B45309] dark:text-[#FCD34D]">status</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
//                   <span className="text-[#B45309] dark:text-[#FB923C]">201</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">).</span>
//                   <span className="text-[#B45309] dark:text-[#FCD34D]">json</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
//                   <span className="text-zinc-800 dark:text-[#E2E8F0]">user</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">);</span>{"\n"}

//                   {"  "}
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">{"}"}</span>{" "}
//                   <span className="text-[#7C3AED] dark:text-[#C792EA]">catch</span>{" "}
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
//                   <span className="text-[#0369A1] dark:text-[#93C5FD]">error</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">)</span>{" "}
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">{"{"}</span>{"\n"}
//                   {"    "}
//                   <span className="text-[#B45309] dark:text-[#FCD34D]">next</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
//                   <span className="text-zinc-800 dark:text-[#E2E8F0]">error</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">);</span>{"\n"}
//                   {"  "}
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">{"}"}</span>{"\n"}
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">{"}"}</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">);</span>{"\n\n"}

//                   <span className="text-zinc-800 dark:text-[#E2E8F0]">app</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
//                   <span className="text-[#B45309] dark:text-[#FCD34D]">use</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
//                   <span className="text-zinc-700 dark:text-[#CBD5E1]">errorHandler</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">);</span>{"\n\n"}

//                   <span className="text-zinc-800 dark:text-[#E2E8F0]">app</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
//                   <span className="text-[#B45309] dark:text-[#FCD34D]">listen</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
//                   <span className="text-zinc-800 dark:text-[#E2E8F0]">PORT</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">,</span>{" "}
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">()</span>{" "}
//                   <span className="text-[#7C3AED] dark:text-[#C792EA]">{"=>"}</span>{" "}
//                   <span className="text-zinc-800 dark:text-[#E2E8F0]">console</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
//                   <span className="text-[#B45309] dark:text-[#FCD34D]">log</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
//                   <span className="text-[#0F766E] dark:text-[#9EECC4]">{"`"} Ready on port {"${PORT}"}{"`"}</span>
//                   <span className="text-zinc-500 dark:text-[#94A3B8]">));</span>
//                 </pre>
//               </div>

//               {/* Right — Feature list */}
//               <div className="p-6 bg-zinc-50 dark:bg-[#050505] flex flex-col justify-center gap-7 font-sans transition-colors duration-300">
//                 {[
//                   {
//                     icon: <Hierarchy size={15} color="#a1a1aa" variant="Bold" />,
//                     title: "Visual Nodes",
//                     desc: "Connect middleware, routing, and logic seamlessly.",
//                   },
//                   {
//                     icon: <ShieldTick size={15} color="#a1a1aa" variant="Bold" />,
//                     title: "Type Safe",
//                     desc: "ESM, async/await, and inherent Zod schema validations.",
//                   },
//                   {
//                     icon: <Export size={15} color="#a1a1aa" variant="Bold" />,
//                     title: "Full Export",
//                     desc: "Download a raw Express app and deploy to any cloud.",
//                   },
//                 ].map(({ icon, title, desc }) => (
//                   <div key={title} className="group flex gap-3 cursor-default">
//                     <div className="shrink-0 mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity duration-200">
//                       {icon}
//                     </div>
//                     <div>
//                       <h3 className="text-black dark:text-white font-medium text-[13px] mb-1 transition-colors duration-300">{title}</h3>
//                       <p className="text-zinc-400 dark:text-zinc-500 text-[12px] leading-snug">{desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Grid Features */}
//       <section className="border-t border-black/[0.06] dark:border-white/[0.06] bg-zinc-50/80 dark:bg-[#050505] py-20 transition-colors duration-300">
//         <div className="max-w-5xl mx-auto px-6">
//           <div className="grid md:grid-cols-3 gap-10">
//             {[
//               {
//                 icon: <Cloud size={18} color="#a1a1aa" variant="Bold" />,
//                 title: "Instant Scalability",
//                 desc: "Design architectures suitable for enterprise scale with built-in best practices.",
//               },
//               {
//                 icon: <Code size={18} color="#a1a1aa" variant="Bold" />,
//                 title: "Code First Approach",
//                 desc: "Readable backend code. No abstracted black box that holds your logic hostage.",
//               },
//               {
//                 icon: <Cpu size={18} color="#a1a1aa" variant="Bold" />,
//                 title: "Automated Boilerplate",
//                 desc: "Let the graph infer TypeScript types, error handling, and standard configurations.",
//               },
//             ].map(({ icon, title, desc }) => (
//               <div key={title} className="group cursor-default">
//                 <div className="mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-200 w-fit">
//                   {icon}
//                 </div>
//                 <h3 className="text-[13px] font-semibold text-black dark:text-white mb-2 transition-colors duration-300">{title}</h3>
//                 <p className="text-zinc-400 dark:text-zinc-500 text-xs leading-relaxed">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-black py-8 text-center text-xs text-zinc-400 dark:text-zinc-600 transition-colors duration-300">
//         <div className="flex items-center justify-center gap-2 mb-2">
//           <Flash size={11} color="#a1a1aa" variant="Bold" />
//           <span className="font-medium">NoCodeAPI</span>
//         </div>
//         <p>© {new Date().getFullYear()} NoCodeAPI. Minimal by design.</p>
//       </footer>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import {
  Flash,
  ArrowRight,
  Code,
  ShieldTick,
  Cpu,
  Hierarchy,
  ExportSquare,
  Export,
  Cloud,
} from "iconsax-reactjs";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"index" | "routes">("index");

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-black/10 dark:selection:bg-white/20 font-sans transition-colors duration-300">

      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-zinc-100/60 to-transparent dark:from-zinc-900/30 dark:to-transparent pointer-events-none transition-colors duration-300" />

      {/* Navigation */}
      <nav className="relative z-10 border-b border-black/[0.06] dark:border-white/[0.06] bg-white/70 dark:bg-black/70 backdrop-blur-xl transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-black dark:bg-white flex items-center justify-center transition-colors duration-300">
              <span className="dark:hidden">
                <Flash size={14} color="#FFF" variant="Bold" />
              </span>
              <span className="hidden dark:block">
                <Flash size={14} color="#000" variant="Bold" />
              </span>
            </div>
            <span className="font-medium text-sm tracking-tight text-black dark:text-white transition-colors duration-300">NoCodeAPI</span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/builder"
              className="text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              Visual Builder
            </Link>
            <Link
              href="/builder"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white dark:text-black bg-black dark:bg-white rounded-md hover:bg-zinc-700 dark:hover:bg-zinc-100 transition-colors duration-200"
            >
              Start Free
            </Link>
            <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />
            <div className="flex h-6 w-6 items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.04] text-zinc-500 dark:text-zinc-400 text-xs font-medium mb-8 transition-colors duration-300">
            <Flash size={12} color="#a1a1aa" variant="Bold" />
            V1.0 is now live
          </div>

          <h1 className="max-w-3xl mx-auto text-4xl sm:text-5xl md:text-[58px] font-semibold tracking-[-0.02em] text-black dark:text-white leading-[1.08] mb-6 transition-colors duration-300">
            Build production backend systems.
            <br className="hidden md:block" />
            <span className="text-zinc-400 dark:text-zinc-600">Without the boilerplate.</span>
          </h1>

          <p className="max-w-xl mx-auto text-[15px] text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10 transition-colors duration-300">
            Design scalable Node.js APIs visually. Generate enterprise-ready Express code with full
            TypeScript support, built-in validation, and zero lock-in.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/builder"
              className="group w-full sm:w-auto px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black font-medium text-sm rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Launch Visual Builder
              <span className="dark:hidden transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight size={15} color="#FFF" variant="Bold" />
              </span>
              <span className="hidden dark:block transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight size={15} color="#000" variant="Bold" />
              </span>
            </Link>
            <a
              href="#features"
              className="group w-full sm:w-auto px-5 py-2.5 bg-transparent text-zinc-600 dark:text-zinc-400 font-medium text-sm rounded-lg hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900/80 transition-all duration-200 border border-black/[0.08] dark:border-white/[0.08] flex items-center justify-center gap-2"
            >
              View Output Example
              <ExportSquare size={14} color="currentColor" variant="Bold" className="opacity-50 group-hover:opacity-80 transition-opacity duration-200" />
            </a>
          </div>
        </div>

        {/* Code Preview Mockup */}
        <div className="mt-20 max-w-5xl mx-auto px-6 relative" id="features">
          <div className="relative rounded-xl border border-black/[0.07] dark:border-white/[0.07] bg-zinc-50 dark:bg-[#0A0A0A] overflow-hidden transition-colors duration-300">

            {/* Editor Header with tabs */}
            <div className="flex items-center px-4 border-b border-black/[0.06] dark:border-white/[0.06] bg-zinc-100/80 dark:bg-[#050505] transition-colors duration-300">
              <div className="flex gap-1.5 shrink-0 py-2.5 pr-4">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800" />
              </div>
              <div className="flex text-[11px] font-mono tracking-wide">
                <button
                  onClick={() => setActiveTab("index")}
                  className={`px-4 py-2.5 border-b-[1.5px] transition-colors duration-150 ${activeTab === "index"
                    ? "text-black dark:text-white border-black/25 dark:border-white/25"
                    : "text-zinc-400 dark:text-zinc-600 border-transparent hover:text-zinc-600 dark:hover:text-zinc-400"
                    }`}
                >
                  src/index.ts
                </button>
                <button
                  onClick={() => setActiveTab("routes")}
                  className={`px-4 py-2.5 border-b-[1.5px] transition-colors duration-150 ${activeTab === "routes"
                    ? "text-black dark:text-white border-black/25 dark:border-white/25"
                    : "text-zinc-400 dark:text-zinc-600 border-transparent hover:text-zinc-600 dark:hover:text-zinc-400"
                    }`}
                >
                  src/routes.ts
                </button>
              </div>
            </div>

            {/* Editor Split */}
            <div className="grid md:grid-cols-[1fr_280px] text-[13px] font-mono leading-relaxed h-[420px]">

              {/* Left — Code Panel */}
              <div className="border-r border-black/[0.06] dark:border-white/[0.06] p-6 bg-white dark:bg-[#0D0D0D] overflow-auto transition-colors duration-300">

                {/* ── src/index.ts ── */}
                {activeTab === "index" && (
                  <pre className="text-zinc-600 dark:text-[#6B7280] leading-relaxed">
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">import</span>{" "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">express</span>{" "}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">from</span>{" "}
                    <span className="text-[#0F766E] dark:text-[#9EECC4]">'express'</span>;{"\n"}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">import</span>{" "}
                    <span className="text-zinc-700 dark:text-[#CBD5E1]">{"{ errorHandler }"}</span>{" "}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">from</span>{" "}
                    <span className="text-[#0F766E] dark:text-[#9EECC4]">'./middleware'</span>;{"\n"}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">import</span>{" "}
                    <span className="text-zinc-700 dark:text-[#CBD5E1]">{"{ userRouter }"}</span>{" "}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">from</span>{" "}
                    <span className="text-[#0F766E] dark:text-[#9EECC4]">'./routes'</span>;{"\n\n"}
                    <span className="text-[#0369A1] dark:text-[#7DD3FC]">const</span>{" "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">app</span>{" "}
                    <span className="text-zinc-500 dark:text-[#94A3B8]">=</span>{" "}
                    <span className="text-[#B45309] dark:text-[#FCD34D]">express</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">();</span>{"\n"}
                    <span className="text-[#0369A1] dark:text-[#7DD3FC]">const</span>{" "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">PORT</span>{" "}
                    <span className="text-zinc-500 dark:text-[#94A3B8]">=</span>{" "}
                    <span className="text-zinc-600 dark:text-[#94A3B8]">process.env.</span>
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">PORT</span>{" "}
                    <span className="text-zinc-500 dark:text-[#94A3B8]">||</span>{" "}
                    <span className="text-[#B45309] dark:text-[#FB923C]">3000</span>;{"\n\n"}
                    <span className="text-zinc-400 dark:text-[#4B5563] italic">{"// Core middleware"}</span>{"\n"}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">app</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">use</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">express</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">json</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">());</span>{"\n"}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">app</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">use</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">express</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">urlencoded</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">{"({ extended: true })"});</span>{"\n\n"}
                    <span className="text-zinc-400 dark:text-[#4B5563] italic">{"// Mount routers"}</span>{"\n"}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">app</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">use</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
                    <span className="text-[#0F766E] dark:text-[#9EECC4]">'/api/v1/users'</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">,</span>{" "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">userRouter</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">);</span>{"\n\n"}
                    <span className="text-zinc-400 dark:text-[#4B5563] italic">{"// Global error handler"}</span>{"\n"}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">app</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">use</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
                    <span className="text-zinc-700 dark:text-[#CBD5E1]">errorHandler</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">);</span>{"\n\n"}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">app</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">listen</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">PORT</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">,</span>{" "}
                    <span className="text-zinc-500 dark:text-[#94A3B8]">()</span>{" "}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">{"=>"}</span>{" "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">console</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">log</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
                    <span className="text-[#0F766E] dark:text-[#9EECC4]">{"`"}🚀 Ready on port {"${PORT}"}{"`"}</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">));</span>
                  </pre>
                )}

                {/* ── src/routes.ts ── */}
                {activeTab === "routes" && (
                  <pre className="text-zinc-600 dark:text-[#6B7280] leading-relaxed">
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">import</span>{" "}
                    <span className="text-zinc-700 dark:text-[#CBD5E1]">{"{ Router }"}</span>{" "}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">from</span>{" "}
                    <span className="text-[#0F766E] dark:text-[#9EECC4]">'express'</span>;{"\n"}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">import</span>{" "}
                    <span className="text-zinc-700 dark:text-[#CBD5E1]">{"{ z }"}</span>{" "}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">from</span>{" "}
                    <span className="text-[#0F766E] dark:text-[#9EECC4]">'zod'</span>;{"\n"}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">import</span>{" "}
                    <span className="text-zinc-700 dark:text-[#CBD5E1]">{"{ db }"}</span>{" "}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">from</span>{" "}
                    <span className="text-[#0F766E] dark:text-[#9EECC4]">'./db'</span>;{"\n"}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">import</span>{" "}
                    <span className="text-zinc-700 dark:text-[#CBD5E1]">{"{ users }"}</span>{" "}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">from</span>{" "}
                    <span className="text-[#0F766E] dark:text-[#9EECC4]">'./schema'</span>;{"\n\n"}
                    <span className="text-[#0369A1] dark:text-[#7DD3FC]">export</span>{" "}
                    <span className="text-[#0369A1] dark:text-[#7DD3FC]">const</span>{" "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">userRouter</span>{" "}
                    <span className="text-zinc-500 dark:text-[#94A3B8]">=</span>{" "}
                    <span className="text-[#B45309] dark:text-[#FCD34D]">Router</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">();</span>{"\n\n"}
                    <span className="text-[#0369A1] dark:text-[#7DD3FC]">const</span>{" "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">UserSchema</span>{" "}
                    <span className="text-zinc-500 dark:text-[#94A3B8]">=</span>{" "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">z</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">object</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">{"({"}</span>{"\n"}
                    {"  "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">name</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">:</span>{" "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">z</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">string</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">().</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">min</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
                    <span className="text-[#B45309] dark:text-[#FB923C]">2</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">),</span>{"\n"}
                    {"  "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">email</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">:</span>{" "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">z</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">string</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">().</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">email</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(),</span>{"\n"}
                    {"  "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">role</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">:</span>{" "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">z</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">enum</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">([</span>
                    <span className="text-[#0F766E] dark:text-[#9EECC4]">'admin'</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">,</span>{" "}
                    <span className="text-[#0F766E] dark:text-[#9EECC4]">'user'</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">]).</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">default</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
                    <span className="text-[#0F766E] dark:text-[#9EECC4]">'user'</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">),</span>{"\n"}
                    <span className="text-zinc-500 dark:text-[#94A3B8]">{"});"}</span>{"\n\n"}
                    <span className="text-zinc-400 dark:text-[#4B5563] italic">{"// GET /api/v1/users"}</span>{"\n"}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">userRouter</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">get</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
                    <span className="text-[#0F766E] dark:text-[#9EECC4]">'/'</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">,</span>{" "}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">async</span>{" "}
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
                    <span className="text-[#0369A1] dark:text-[#93C5FD]">_req</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">,</span>{" "}
                    <span className="text-[#0369A1] dark:text-[#93C5FD]">res</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">)</span>{" "}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">{"=>"}</span>{" "}
                    <span className="text-zinc-500 dark:text-[#94A3B8]">{"{"}</span>{"\n"}
                    {"  "}
                    <span className="text-[#0369A1] dark:text-[#7DD3FC]">const</span>{" "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">all</span>{" "}
                    <span className="text-zinc-500 dark:text-[#94A3B8]">=</span>{" "}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">await</span>{" "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">db</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">select</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">().</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">from</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">users</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">);</span>{"\n"}
                    {"  "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">res</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">json</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">all</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">);</span>{"\n"}
                    <span className="text-zinc-500 dark:text-[#94A3B8]">{"});"}</span>{"\n\n"}
                    <span className="text-zinc-400 dark:text-[#4B5563] italic">{"// POST /api/v1/users"}</span>{"\n"}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">userRouter</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">post</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
                    <span className="text-[#0F766E] dark:text-[#9EECC4]">'/'</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">,</span>{" "}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">async</span>{" "}
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
                    <span className="text-[#0369A1] dark:text-[#93C5FD]">req</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">,</span>{" "}
                    <span className="text-[#0369A1] dark:text-[#93C5FD]">res</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">,</span>{" "}
                    <span className="text-[#0369A1] dark:text-[#93C5FD]">next</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">)</span>{" "}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">{"=>"}</span>{" "}
                    <span className="text-zinc-500 dark:text-[#94A3B8]">{"{"}</span>{"\n"}
                    {"  "}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">try</span>{" "}
                    <span className="text-zinc-500 dark:text-[#94A3B8]">{"{"}</span>{"\n"}
                    {"    "}
                    <span className="text-[#0369A1] dark:text-[#7DD3FC]">const</span>{" "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">data</span>{" "}
                    <span className="text-zinc-500 dark:text-[#94A3B8]">=</span>{" "}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">await</span>{" "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">UserSchema</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">parseAsync</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(req.body);</span>{"\n"}
                    {"    "}
                    <span className="text-[#0369A1] dark:text-[#7DD3FC]">const</span>{" "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">user</span>{" "}
                    <span className="text-zinc-500 dark:text-[#94A3B8]">=</span>{" "}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">await</span>{" "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">db</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">insert</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(users).</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">values</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(data).</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">returning</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">();</span>{"\n"}
                    {"    "}
                    <span className="text-zinc-800 dark:text-[#E2E8F0]">res</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">.</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">status</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
                    <span className="text-[#B45309] dark:text-[#FB923C]">201</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">).</span>
                    <span className="text-[#B45309] dark:text-[#FCD34D]">json</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(user[</span>
                    <span className="text-[#B45309] dark:text-[#FB923C]">0</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">]);</span>{"\n"}
                    {"  "}
                    <span className="text-zinc-500 dark:text-[#94A3B8]">{"}"}</span>{" "}
                    <span className="text-[#7C3AED] dark:text-[#C792EA]">catch</span>{" "}
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(</span>
                    <span className="text-[#0369A1] dark:text-[#93C5FD]">err</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">)</span>{" "}
                    <span className="text-zinc-500 dark:text-[#94A3B8]">{"{"}</span>{" "}
                    <span className="text-[#B45309] dark:text-[#FCD34D]">next</span>
                    <span className="text-zinc-500 dark:text-[#94A3B8]">(err);</span>{" "}
                    <span className="text-zinc-500 dark:text-[#94A3B8]">{"}"}</span>{"\n"}
                    <span className="text-zinc-500 dark:text-[#94A3B8]">{"});"}</span>
                  </pre>
                )}
              </div>

              {/* Right — Feature list */}
              <div className="p-6 bg-zinc-50 dark:bg-[#050505] flex flex-col justify-center gap-7 font-sans transition-colors duration-300">
                {[
                  {
                    icon: <Hierarchy size={15} color="#a1a1aa" variant="Bold" />,
                    title: "Visual Nodes",
                    desc: "Connect middleware, routing, and logic seamlessly.",
                  },
                  {
                    icon: <ShieldTick size={15} color="#a1a1aa" variant="Bold" />,
                    title: "Type Safe",
                    desc: "ESM, async/await, and inherent Zod schema validations.",
                  },
                  {
                    icon: <Export size={15} color="#a1a1aa" variant="Bold" />,
                    title: "Full Export",
                    desc: "Download a raw Express app and deploy to any cloud.",
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="group flex gap-3 cursor-default">
                    <div className="shrink-0 mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-black dark:text-white font-medium text-[13px] mb-1 transition-colors duration-300">{title}</h3>
                      <p className="text-zinc-400 dark:text-zinc-500 text-[12px] leading-snug">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Grid Features */}
      <section className="border-t border-black/[0.06] dark:border-white/[0.06] bg-zinc-50/80 dark:bg-[#050505] py-20 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Cloud size={18} color="#a1a1aa" variant="Bold" />,
                title: "Instant Scalability",
                desc: "Design architectures suitable for enterprise scale with built-in best practices.",
              },
              {
                icon: <Code size={18} color="#a1a1aa" variant="Bold" />,
                title: "Code First Approach",
                desc: "Readable backend code. No abstracted black box that holds your logic hostage.",
              },
              {
                icon: <Cpu size={18} color="#a1a1aa" variant="Bold" />,
                title: "Automated Boilerplate",
                desc: "Let the graph infer TypeScript types, error handling, and standard configurations.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="group cursor-default">
                <div className="mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-200 w-fit">
                  {icon}
                </div>
                <h3 className="text-[13px] font-semibold text-black dark:text-white mb-2 transition-colors duration-300">{title}</h3>
                <p className="text-zinc-400 dark:text-zinc-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-black py-8 text-center text-xs text-zinc-400 dark:text-zinc-600 transition-colors duration-300">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Flash size={11} color="#a1a1aa" variant="Bold" />
          <span className="font-medium">NoCodeAPI</span>
        </div>
        <p>© {new Date().getFullYear()} NoCodeAPI. Minimal by design.</p>
      </footer>
    </div>
  );
}
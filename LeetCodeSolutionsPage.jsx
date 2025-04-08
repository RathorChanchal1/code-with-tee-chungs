// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// const problems = [
//   {
//     category: "LeetCode",
//     list: [
//       {
//         title: "Merge Sorted Array",
//         link: "https://leetcode.com/problems/merge-sorted-array/",
//         solution: "https://github.com/RathorChanchal1/personalGitProjects/blob/main/MergeSort.java",
//       },
//       {
//         title: "moveZeroes",
//         link: "https://leetcode.com/problems/move-zeroes/description/",
//         solution: "https://github.com/RathorChanchal1/personalGitProjects/blob/main/Solution1.java",
//       },
//       {
//         title: "majorityElement",
//         link: "https://leetcode.com/problems/majority-element/description/",
//         solution: "https://github.com/RathorChanchal1/personalGitProjects/blob/main/Solution2.java",
//       },
//       {
//         title: "removeDuplicates",
//         link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/",
//         solution: "https://github.com/RathorChanchal1/personalGitProjects/blob/main/Solution3.java",
//       },
//       {
//         title: "maxProfit",
//         link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/",
//         solution: "https://github.com/RathorChanchal1/personalGitProjects/blob/main/Solution4.java",
//       },
//     ],
//   },
//   {
//     category: "Striver SDE Sheet",
//     sheetLink: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
//     list: [
//       {
//         title: "set-matrix-zeroes",
//         link: "https://leetcode.com/problems/set-matrix-zeroes/description/",
//         solution: "https://github.com/RathorChanchal1/personalGitProjects/blob/main/StriverSol1.java",
//       },
//       {
//         title: "pascals-triangle",
//         link: "https://leetcode.com/problems/pascals-triangle/description/",
//         solution: "https://github.com/RathorChanchal1/personalGitProjects/blob/main/StriverSol2.java",
//       },
//       {
//         title: "next-permutation",
//         link: "https://leetcode.com/problems/next-permutation/description/",
//         solution: "https://github.com/RathorChanchal1/personalGitProjects/blob/main/StriverSol3.java",
//       },
//     ],
//   },
// ];

// export default function LeetCodeSolutionsPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 p-6 max-w-6xl mx-auto">
//       <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">🌟 Coding Interview Problems</h1>

//       {problems.map((section, index) => (
//         <div key={index} className="mb-16">
//           <h2 className="text-3xl font-semibold mb-6 text-indigo-600 flex items-center gap-2">
//             {section.category}{" "}
//             {section.sheetLink && (
//               <a
//                 href={section.sheetLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-sm text-blue-500 underline"
//               >
//                 (Visit Sheet)
//               </a>
//             )}
//           </h2>

//           <ul className="space-y-6">
//             {section.list.map((problem, i) => (
//               <li key={i}>
//                 <Card className="hover:shadow-xl transition-shadow duration-300">
//                   <CardContent className="p-6">
//                     <h3 className="text-xl font-semibold mb-4 text-gray-700">
//                       {i + 1}. {problem.title.replace(/-/g, ' ')}
//                     </h3>
//                     <div className="flex gap-4">
//                       <Button asChild variant="outline" className="w-full">
//                         <a href={problem.link} target="_blank" rel="noopener noreferrer">
//                           LeetCode
//                         </a>
//                       </Button>
//                       <Button asChild variant="default" className="w-full">
//                         <a href={problem.solution} target="_blank" rel="noopener noreferrer">
//                           Solution
//                         </a>
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}

//       <footer className="mt-20 text-center text-sm text-gray-500">
//         📧 Contact me on{' '}
//         <a
//           href="https://linkedin.com/in/chanchal-rathor"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-500 underline"
//         >
//           LinkedIn
//         </a>
//         . Happy Coding! 💻
//       </footer>
//     </div>
//   );
// }

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const problems = [
  {
    category: "LeetCode",
    list: [
      {
        title: "Merge Sorted Array",
        link: "https://leetcode.com/problems/merge-sorted-array/",
        solution: "https://github.com/RathorChanchal1/personalGitProjects/blob/main/MergeSort.java",
      },
      {
        title: "moveZeroes",
        link: "https://leetcode.com/problems/move-zeroes/description/",
        solution: "https://github.com/RathorChanchal1/personalGitProjects/blob/main/Solution1.java",
      },
      {
        title: "majorityElement",
        link: "https://leetcode.com/problems/majority-element/description/",
        solution: "https://github.com/RathorChanchal1/personalGitProjects/blob/main/Solution2.java",
      },
      {
        title: "removeDuplicates",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/",
        solution: "https://github.com/RathorChanchal1/personalGitProjects/blob/main/Solution3.java",
      },
      {
        title: "maxProfit",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/",
        solution: "https://github.com/RathorChanchal1/personalGitProjects/blob/main/Solution4.java",
      },
    ],
  },
  {
    category: "Striver SDE Sheet",
    sheetLink: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
    list: [
      {
        title: "set-matrix-zeroes",
        link: "https://leetcode.com/problems/set-matrix-zeroes/description/",
        solution: "https://github.com/RathorChanchal1/personalGitProjects/blob/main/StriverSol1.java",
      },
      {
        title: "pascals-triangle",
        link: "https://leetcode.com/problems/pascals-triangle/description/",
        solution: "https://github.com/RathorChanchal1/personalGitProjects/blob/main/StriverSol2.java",
      },
      {
        title: "next-permutation",
        link: "https://leetcode.com/problems/next-permutation/description/",
        solution: "https://github.com/RathorChanchal1/personalGitProjects/blob/main/StriverSol3.java",
      },
    ],
  },
];

export default function LeetCodeSolutionsPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🌟 Coding Interview Problems</h1>

      {problems.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            {section.category} {section.sheetLink && (
              <a
                href={section.sheetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-500 underline text-sm"
              >
                (Visit Sheet)
              </a>
            )}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.list.map((problem, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium mb-2">{problem.title}</h3>
                  <div className="flex gap-4">
                    <Button asChild variant="outline">
                      <a href={problem.link} target="_blank" rel="noopener noreferrer">
                        LeetCode
                      </a>
                    </Button>
                    <Button asChild variant="default">
                      <a href={problem.solution} target="_blank" rel="noopener noreferrer">
                        Solution
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <footer className="mt-12 text-center text-sm text-gray-500">
        📧 Contact me on{' '}
        <a
          href="https://linkedin.com/in/chanchal-rathor"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          LinkedIn
        </a>
        . Happy Coding! 💻
      </footer>
    </div>
  );
}

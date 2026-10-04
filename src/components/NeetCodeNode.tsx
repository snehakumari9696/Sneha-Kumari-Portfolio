import React, { useState } from 'react';
import { Terminal, Check, Award, Cpu } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface TopicDetail {
  name: string;
  count: string;
  patterns: string[];
  complexity: string;
}

const TOPICS: TopicDetail[] = [
  {
    name: 'Arrays & Hashing',
    count: '9 Problems',
    patterns: ['Hash Map frequency counts', 'Prefix sum', 'Product of array except self'],
    complexity: 'O(N) Time · O(N) Space',
  },
  {
    name: 'Two Pointers & Sliding Window',
    count: '11 Problems',
    patterns: ['Opposite-end convergence (3Sum)', 'Dynamic window expansion', 'Minimum window substring'],
    complexity: 'O(N) Time · O(1) Auxiliary Space',
  },
  {
    name: 'Trees & Binary Search',
    count: '15 Problems',
    patterns: ['BFS level-order traversal', 'DFS lowest common ancestor', 'Invert & validate BST'],
    complexity: 'O(N) Time · O(H) Call Stack',
  },
  {
    name: 'Graphs & BFS/DFS',
    count: '13 Problems',
    patterns: ['Topological sort (Course Schedule)', 'Connected components', 'Clone Graph'],
    complexity: 'O(V + E) Time · O(V) Space',
  },
  {
    name: 'Dynamic Programming',
    count: '15 Problems',
    patterns: ['1D memoization (Climbing Stairs)', '2D Grid paths & Coin Change', 'Longest Common Subsequence'],
    complexity: 'O(N · M) Time · State Space Optimization',
  },
  {
    name: 'Intervals & Backtracking',
    count: '12 Problems',
    patterns: ['Merge Intervals & meeting rooms', 'Permutations & Subsets', 'Word Search recursion'],
    complexity: 'Branch & Bound pruning',
  },
];

export const NeetCodeNode: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<TopicDetail>(TOPICS[0]);

  return (
    <section className="relative w-full py-20 bg-[#FAF7F2] text-[#3C2317] border-t border-[#A67F54]/20">
      <div className="max-w-6xl mx-auto px-8 md:px-20 relative">
        <div className="bg-[#2A180E] text-[#F5F2EB] rounded-2xl p-8 sm:p-10 shadow-xl border border-[#A67F54]/30 relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#A67F54]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#A67F54]/20 text-[#D8BA8D] border border-[#A67F54]/40">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    NeetCode Blind 75 — 100% Completed
                  </h3>
                  <span className="text-xs bg-[#D8BA8D]/20 text-[#D8BA8D] border border-[#D8BA8D]/40 px-2 py-0.5 rounded-sm font-mono font-semibold">
                    75 / 75
                  </span>
                </div>
                <p className="text-xs text-[#D8BA8D]/80 font-mono mt-0.5">
                  Core Technical Interview Problem Set · GeeksforGeeks &amp; NeetCode
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-white/60">
              <Cpu className="w-4 h-4 text-[#D8BA8D]" />
              <span>Algorithmic Optimization Rigor</span>
            </div>
          </div>

          {/* Interactive Topic Selector & Spec Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Topic List */}
            <div className="lg:col-span-6 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#D8BA8D]/70 block mb-2">
                Select Algorithmic Domain:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {TOPICS.map((topic) => {
                  const isSelected = selectedTopic.name === topic.name;
                  return (
                    <button
                      key={topic.name}
                      onClick={() => {
                        soundManager.playSoftTick();
                        setSelectedTopic(topic);
                      }}
                      data-cursor="TOPIC"
                      className={`p-3 rounded-lg text-left border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#A67F54] text-[#FAF7F2] border-[#D8BA8D] shadow-sm'
                          : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                      }`}
                    >
                      <span className="text-xs font-semibold">{topic.name}</span>
                      <Check className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-[#D8BA8D]'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pattern & Complexity Console Display */}
            <div className="lg:col-span-6 bg-black/40 rounded-xl p-5 border border-white/10 font-mono text-xs space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[#D8BA8D]">
                <span className="flex items-center gap-1.5 font-bold">
                  <Terminal className="w-3.5 h-3.5" /> {selectedTopic.name}
                </span>
                <span className="text-[10px] text-white/50">{selectedTopic.count}</span>
              </div>

              <div>
                <span className="text-[11px] text-white/60 block mb-2 font-semibold">
                  Core Invariant &amp; Traversal Patterns:
                </span>
                <ul className="space-y-1.5 text-white/90">
                  {selectedTopic.patterns.map((pat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#D8BA8D]">›</span>
                      <span>{pat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                <span className="text-white/60">Asymptotic Bounds:</span>
                <span className="text-[#D8BA8D] font-bold">{selectedTopic.complexity}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

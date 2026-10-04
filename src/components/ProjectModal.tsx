import React from 'react';
import { Project } from '../types/portfolio';
import { X, ExternalLink, Code2, Layers, CheckCircle2, Terminal } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#FAF7F2] border border-[#A67F54]/30 rounded-2xl shadow-2xl overflow-hidden text-[#3C2317] max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#A67F54]/20 bg-[#F4EFEA]">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest font-mono text-[#8B653B]">
              Case Study / {project.category}
            </span>
            <span className="text-[#A67F54]/40">·</span>
            <span className="text-xs text-[#8B653B] font-mono">{project.period}</span>
          </div>

          <button
            onClick={() => {
              soundManager.playSoftTick();
              onClose();
            }}
            data-cursor="CLOSE"
            className="p-1.5 rounded-full hover:bg-[#A67F54]/15 text-[#3C2317] transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Visual Project Mockup Banner */}
          {project.image && (
            <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-[#A67F54]/30 shadow-md relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 text-xs font-mono text-white/90 bg-black/60 backdrop-blur-xs px-3 py-1 rounded-md border border-white/20">
                {project.category} · {project.period}
              </div>
            </div>
          )}

          {/* Title & Headline */}
          <div>
            <h3
              className="text-2xl sm:text-3xl font-extrabold text-[#3C2317] tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-[#8B653B] font-medium mt-1">
              {project.subtitle}
            </p>

            {project.metrics && (
              <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#8B653B] bg-[#F0EBE1] px-3 py-1.5 rounded-md border border-[#A67F54]/25">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A67F54]" />
                <span>{project.metrics}</span>
              </div>
            )}
          </div>

          {/* Description Paragraphs */}
          <div className="space-y-3 text-sm md:text-base text-[#5C432C] leading-relaxed">
            {project.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Architecture Highlights */}
          {project.architectureHighlights && project.architectureHighlights.length > 0 && (
            <div className="p-5 rounded-xl bg-[#F4EFEA] border border-[#A67F54]/25 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3C2317]">
                <Layers className="w-4 h-4 text-[#A67F54]" />
                <span>Architectural Foundations &amp; Engineering Decisions</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#5C432C]">
                {project.architectureHighlights.map((arch, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#A67F54] mt-1 shrink-0">▪</span>
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Vector (Zero-pill discipline: typographic separators) */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#8B653B] mb-2.5 flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-[#A67F54]" />
              <span>Technology &amp; Toolchain Stack</span>
            </h4>
            <div className="flex flex-wrap items-center gap-y-1.5 text-xs text-[#5C432C] font-mono bg-[#FAF7F2] p-4 rounded-xl border border-[#A67F54]/20">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={idx}>
                  <span className="font-medium text-[#3C2317]">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-[#A67F54]/40 mx-2 select-none">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Interactive Simulated Code / AST Snippet Preview */}
          <div className="p-4 rounded-xl bg-[#2A180E] text-[#F5F2EB] font-mono text-xs overflow-x-auto shadow-inner space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-[#D8BA8D]">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" /> {project.id}.config.ts
              </span>
              <span className="text-[10px] text-white/50">TypeScript / AST Spec</span>
            </div>
            <pre className="text-[11px] text-white/85 leading-relaxed">
              {project.id === 'syntron-ai'
                ? `// AST Parsing & Blast Radius Discovery Engine
export async function analyzeBlastRadius(repo: Repository, diff: FileDiff[]) {
  const astTree = parseTypeScriptAST(diff.contents);
  const dependencyGraph = await buildDependencyTopologies(repo);
  const affectedCallSites = dependencyGraph.findAffectedNodes(astTree.modifiedSymbols);
  
  return {
    riskFactor: calculateRisk(affectedCallSites.length),
    affectedModules: affectedCallSites.map(n => n.filePath),
    automatedReviewPrompt: constructGroqContext(astTree, affectedCallSites)
  };
}`
                : project.id === 'social-voice-academy'
                ? `// Real-Time Dev Room Socket Channel & Peer Synchronization
io.of('/dev-rooms').on('connection', (socket) => {
  socket.on('join-room', async ({ roomId, userToken }) => {
    const verifiedUser = verifyJWT(userToken);
    socket.join(roomId);
    socket.to(roomId).emit('peer-joined', { userId: verifiedUser.id });
    
    // Broadcast live code edit delta to active peers
    socket.on('code-delta', (delta) => {
      socket.to(roomId).emit('code-sync', delta);
    });
  });
});`
                : `// Enterprise Service Architecture with Transactional Guarantees
@Service
public class OrderService {
    @Transactional
    public OrderResponse processCheckout(CheckoutRequest request) {
        validateCartInventory(request.getCartItems());
        OrderEntity order = orderRepository.save(new OrderEntity(request));
        paymentGateway.executeTransaction(order);
        return new OrderResponse(order.getId(), OrderStatus.CONFIRMED);
    }
}`}
            </pre>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#F4EFEA] border-t border-[#A67F54]/20 flex items-center justify-between text-xs">
          <span className="text-[#8B653B]">
            Sneha Kumari · {project.title}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                soundManager.playSoftTick();
                onClose();
              }}
              className="px-4 py-2 rounded-lg text-[#5C432C] hover:bg-[#A67F54]/10 transition-colors font-medium cursor-pointer"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={() => onClose()}
              className="px-4 py-2 rounded-lg bg-[#3C2317] text-[#FAF7F2] font-semibold hover:bg-[#5C432C] transition-colors flex items-center gap-1.5"
            >
              Discuss Architecture <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

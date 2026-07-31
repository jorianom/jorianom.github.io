import { FaCircle } from "react-icons/fa6";

export const AvailabilityBadge = () => {
    return (
        <div className="availability-badge flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-300 backdrop-blur-sm shadow-[0_0_20px_rgba(74,222,128,0.15)]">
            <span className="availability-badge-dot">
                <FaCircle className="w-2.5 h-2.5 text-green-400" />
            </span>
            <span>Disponibilidad inmediata</span>
        </div>
    );
};

import {
  Phone,
  Mail,
  Truck,
} from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-slate-900 text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-wrap justify-between items-center">

        <div className="flex flex-wrap gap-6">

          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+254 142 6293343</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>sales@medilink.co.ke</span>
          </div>

        </div>

        <div className="flex items-center gap-2 text-cyan-300">
          <Truck size={16} />
          <span>Fast Delivery Across Kenya</span>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
import { Wifi, Battery, Signal } from "lucide-react";

const messages = [
  { sender: "Customer", text: "Hi, I need my furnace looked at — it's making a weird noise", incoming: true },
  { sender: "Home Service AI", text: "Hi! I can help with that. What's your address and when works best for you?", incoming: false },
  { sender: "Customer", text: "123 Maple St, Fort McMurray. Tomorrow morning if possible", incoming: true },
  { sender: "Home Service AI", text: "Perfect — I've booked you for tomorrow at 9:00 AM. You'll get a text confirmation shortly. 👍", incoming: false },
  { sender: "Customer", text: "Wow that was fast, thanks!", incoming: true },
];

const PhoneMockup = () => (
  <div className="relative mx-auto w-[280px] md:w-[300px]">
    {/* Phone frame */}
    <div className="rounded-[2.5rem] border-[6px] border-[hsl(222,20%,20%)] bg-[hsl(222,20%,12%)] shadow-2xl overflow-hidden">
      {/* Notch */}
      <div className="flex justify-center pt-2 pb-1 bg-[hsl(222,20%,12%)]">
        <div className="w-24 h-5 bg-[hsl(222,20%,8%)] rounded-full" />
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-5 py-1 text-[10px] text-white/50">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <Signal className="w-3 h-3" />
          <Wifi className="w-3 h-3" />
          <Battery className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Chat header */}
      <div className="bg-[hsl(222,20%,15%)] px-4 py-2.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
            <span className="text-xs font-bold text-primary">AI</span>
          </div>
          <div>
            <p className="text-white text-xs font-semibold">Home Service AI</p>
            <p className="text-[10px] text-green-400">Online — replies instantly</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="bg-[hsl(222,20%,10%)] px-3 py-4 space-y-3 min-h-[320px]">
        {messages.map((msg, i) => (
          <div key={i} className={`flex flex-col ${msg.incoming ? "items-start" : "items-end"}`}>
            <span className={`text-[9px] mb-0.5 px-1 ${msg.incoming ? "text-white/40" : "text-primary/60"}`}>
              {msg.sender}
            </span>
            <div
              className={`max-w-[85%] px-3 py-2 text-xs leading-relaxed ${
                msg.incoming
                  ? "bg-[hsl(222,15%,22%)] text-white/90 rounded-2xl rounded-tl-md"
                  : "bg-primary text-white rounded-2xl rounded-tr-md"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="bg-[hsl(222,20%,12%)] px-3 py-3 border-t border-white/10">
        <div className="bg-[hsl(222,15%,18%)] rounded-full px-4 py-2 text-[11px] text-white/30">
          Type a message...
        </div>
      </div>

      {/* Home indicator */}
      <div className="flex justify-center py-2 bg-[hsl(222,20%,12%)]">
        <div className="w-28 h-1 bg-white/20 rounded-full" />
      </div>
    </div>
  </div>
);

export default PhoneMockup;

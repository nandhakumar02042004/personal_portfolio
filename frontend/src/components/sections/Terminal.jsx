import React, { useState } from 'react';
import { Terminal as TerminalIcon, Cpu, Shield, Globe, Activity } from 'lucide-react';

export default function Terminal() {
  const [terminalCommand, setTerminalCommand] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    'AUTHENTICATING CLIENT PATHWAY...',
    '--------------------------------------------------',
    '💼 LinkedIn',
    'https://linkedin.com/in/nandhakumar',
    '',
    '🐙 GitHub',
    'https://github.com/nandhakumar02042004',
    '',
    '📧 Email',
    'nandhakumar@example.com',
    '',
    '📱 WhatsApp',
    '+91 XXXXX XXXXX',
    '',
    '🐦 X (Twitter)',
    'https://x.com/nandhakumar',
    '',
    'Status: ONLINE',
    '--------------------------------------------------',
    'Type "help" for interactive console commands.',
    'visitor@nandhakumar:~$ '
  ]);

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const command = terminalCommand.trim().toLowerCase();
    if (!command) return;

    let response = [];
    switch (command) {
      case 'help':
        response = [
          'Available Operations:',
          '  about      - Fetch developer profile diagnostics',
          '  skills     - List detailed core technical competencies',
          '  projects   - List completed engineering projects',
          '  experience - Chronological professional milestones',
          '  contact    - Display contact avenues',
          '  resume     - Download professional resume PDF',
          '  linkedin   - Open LinkedIn profile in a new tab',
          '  github     - Open GitHub profile in a new tab',
          '  clear      - Clear console buffers'
        ];
        break;
      case 'about':
        response = [
          'Developer profile authenticated:',
          '  Name:        Nandhakumar',
          '  Role:        Web Application Developer',
          '  Experience:  2+ Years Professional Experience',
          '  Location:    Tamil Nadu, India',
          '  Status:      ONLINE'
        ];
        break;
      case 'skills':
        response = [
          'Frontend Stack: HTML, CSS, JavaScript, React, JS, Next.js',
          'Backend Stack:  Python, FastAPI, PostgreSQL (Database)',
          'CMS Platforms:  WordPress, Shopify',
          'Tools & Cloud:  Git, GitHub, Vercel, Netlify, AWS (Basics)',
          'Others:         AI Chatbots, Automation Workflows'
        ];
        break;
      case 'projects':
        response = [
          'Completed Projects Log:',
          '  Project #01: KIOT College Website [Completed]',
          '  Project #02: Kongu Engineering College [Completed]',
          '  Project #03: Kongu Naturopathy College [Completed]'
        ];
        break;
      case 'experience':
        response = [
          'Career Timeline Milestones:',
          '  2026 - Pres:  Web Application Developer, Kanavu Startup Village',
          '  Present:      Continuous Learning & Growth',
          '  2025 - 2026:  Customer Support Associate, Firstsource Solutions',
          '  2024 - 2025:  Python Full Stack Intern, Indra Institute'
        ];
        break;
      case 'contact':
        response = [
          '💼 LinkedIn:    https://linkedin.com/in/nandhakumar',
          '🐙 GitHub:      https://github.com/nandhakumar02042004',
          '📧 Email:       nandhakumar@example.com',
          '📱 WhatsApp:    +91 XXXXX XXXXX',
          '🐦 X (Twitter): https://x.com/nandhakumar'
        ];
        break;
      case 'linkedin':
        window.open('https://linkedin.com/in/nandhakumar', '_blank');
        response = ['🔗 Opening LinkedIn profile in a new tab...'];
        break;
      case 'github':
        window.open('https://github.com/nandhakumar02042004', '_blank');
        response = ['🐙 Opening GitHub profile in a new tab...'];
        break;
      case 'resume':
        window.open('/resume.pdf', '_blank');
        response = [
          '📥 Opening resume download stream...',
          'Resume documentation requested successfully.'
        ];
        break;
      case 'clear':
        setTerminalLogs(['visitor@nandhakumar:~$ ']);
        setTerminalCommand('');
        return;
      default:
        response = [`Error: Command "${command}" not recognized. Type "help" for commands.`];
    }

    setTerminalLogs((prev) => [
      ...prev.slice(0, -1),
      `visitor@nandhakumar:~$ ${terminalCommand}`,
      ...response,
      'visitor@nandhakumar:~$ '
    ]);
    setTerminalCommand('');
  };

  return (
    <section id="terminal" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/40">
      <div className="text-center max-w-xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider font-mono mb-4">
          <TerminalIcon className="w-3.5 h-3.5" />
          SYSTEM CONSOLE
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Developer Console Dashboard</h2>
        <p className="text-slate-400 text-sm">Monitor hardware indicators and execute profile console routines.</p>
      </div>

      {/* Modern, wider HUD split console */}
      <div className="max-w-5xl mx-auto bg-[#050e1e]/95 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative grid grid-cols-1 lg:grid-cols-12 gap-0 backdrop-blur-sm">
        <div className="hud-scanner" />
        
        {/* Left Side: System Status Panel */}
        <div className="lg:col-span-4 bg-[#091122]/60 border-b lg:border-b-0 lg:border-r border-slate-800/80 p-6 flex flex-col justify-between font-mono text-[10px] text-slate-400 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-wider pb-2 border-b border-slate-850">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Diagnostic Monitor</span>
            </div>

            <div className="space-y-3">
              {/* CPU Indicator */}
              <div className="space-y-1">
                <div className="flex justify-between font-bold text-slate-300">
                  <span>HOST CPU UTILIZATION</span>
                  <span className="text-cyan-400">38.4%</span>
                </div>
                <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-850">
                  <div className="bg-cyan-500 h-full rounded-full w-[38.4%]" />
                </div>
              </div>

              {/* Memory Indicator */}
              <div className="space-y-1">
                <div className="flex justify-between font-bold text-slate-300">
                  <span>RAM USAGE LOG</span>
                  <span className="text-emerald-400">1.84 GB / 8.00 GB</span>
                </div>
                <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-850">
                  <div className="bg-emerald-500 h-full rounded-full w-[23%]" />
                </div>
              </div>

              {/* Secure Node Info */}
              <div className="space-y-1">
                <div className="flex justify-between font-bold text-slate-300">
                  <span>NODE ENCRYPTION</span>
                  <span className="text-purple-400">SSL_AES_256</span>
                </div>
                <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-850">
                  <div className="bg-purple-500 h-full rounded-full w-[100%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-850 lg:border-t-0">
            <div className="flex items-center justify-between">
              <span className="font-bold">SHELL CONNECTION:</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                SECURE LINK
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="font-bold">STATUS REPORT:</span>
              <span className="text-cyan-400 font-bold uppercase">ONLINE</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="font-bold">CONSOLE SESSION:</span>
              <span className="text-slate-500">nandhakumar_terminal.sh</span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Shell Console */}
        <div className="lg:col-span-8 flex flex-col justify-between min-h-[350px]">
          {/* Header Title Bar */}
          <div className="bg-[#091122]/90 border-b border-slate-800/80 px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
            </div>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">interactive_shell.bash</span>
          </div>

          {/* Prompt Log Output */}
          <div className="p-6 font-mono text-xs text-slate-300 space-y-3 flex-1 overflow-y-auto max-h-[300px]">
            {terminalLogs.map((log, index) => (
              <div key={index} className="whitespace-pre-wrap leading-relaxed">
                {log.startsWith('visitor@') ? (
                  <span>
                    <span className="text-cyan-400">visitor@nandhakumar</span>
                    <span className="text-slate-500">:</span>
                    <span className="text-emerald-400">~$</span>{' '}
                    {log.split('~$ ')[1]}
                  </span>
                ) : (
                  <span>{log}</span>
                )}
              </div>
            ))}

            {/* Input Form Prompt */}
            <form onSubmit={handleTerminalSubmit} className="flex items-center gap-1.5 text-slate-200 mt-2">
              <span className="text-cyan-400">visitor@nandhakumar</span>
              <span className="text-slate-500">:</span>
              <span className="text-emerald-400">~$</span>
              <input 
                type="text" 
                value={terminalCommand}
                onChange={(e) => setTerminalCommand(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none font-mono text-xs focus:ring-0 text-white p-0 m-0"
                placeholder="Type 'help'..."
                autoFocus
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

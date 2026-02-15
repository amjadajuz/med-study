interface MnemonicLetter {
  letter: string;
  expansion: string;
}

interface MnemonicBlockProps {
  title: string;
  letters: MnemonicLetter[];
}

export const MnemonicBlock = ({ title, letters }: MnemonicBlockProps) => {
  return (
    <div className="my-8 rounded-lg border border-border p-6 shadow-sm">
      <div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-border text-primary text-[0.75rem] font-semibold uppercase tracking-wide mb-4">
        Mnemonic
      </div>
      
      <h4 className="text-[1.125rem] font-semibold text-foreground mb-5 !m-0">
        {title}
      </h4>

      <div className="space-y-3">
        {letters.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-3 rounded-lg bg-card/50 border border-border hover:bg-border cursor-pointer transition-colors"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center shadow-sm bg-background">
              <span className="text-primary text-[1.5rem] text-transparent [-webkit-text-stroke:1px_theme(colors.primary)]">
                {item.letter}
              </span>
            </div>
            <div className="flex-1 pt-1">
              <p className="text-[0.9375rem] text-foreground leading-relaxed m-0">
                {item.expansion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

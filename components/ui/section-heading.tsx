import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: "left" | "center" | "right"
}

export function SectionHeading({ 
  title, 
  subtitle, 
  className,
  align = "center" 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "space-y-2 mb-10",
      align === "center" && "text-center",
      align === "right" && "text-right",
      className
    )}>
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-wide text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1 bg-chart-1 w-16 mt-4",
        align === "center" && "mx-auto",
        align === "right" && "ml-auto"
      )} />
    </div>
  )
}
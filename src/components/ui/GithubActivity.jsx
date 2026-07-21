import { GitHubCalendar } from "react-github-calendar";

export default function GithubActivity() {
  return (
    <section id="github" className="mt-20">
      <div className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          GITHUB ACTIVITY
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          My Daily Contributions
        </h2>

        <p className="mt-2 text-muted-foreground">
          I enjoy building projects consistently and contributing to open-source.
          Here's my GitHub activity over the last year.
        </p>
      </div>

      <div
        className="
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-900/40
          backdrop-blur
          p-8
          transition-all
          duration-300
          hover:border-cyan-500/50
          hover:shadow-lg
          hover:shadow-cyan-500/20
        "
      >
      <GitHubCalendar
  username="KalyanSai956"
  colorScheme="dark"
  blockSize={11}
  blockMargin={3}
  fontSize={12}
  showWeekdayLabels
/>
      </div>
    </section>
  );
}
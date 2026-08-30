import { GitHubCalendar } from "react-github-calendar";

export default function GithubActivity() {
  const currentYear = new Date().getFullYear();
  const rangeStart = new Date(currentYear, 5, 1); // June 1 (month index 5)
  const rangeEnd = new Date(currentYear, 11, 31); // Dec 31 (month index 11)

  const filterToJuneDec = (contributions) =>
    contributions.filter((day) => {
      const date = new Date(day.date);
      return date >= rangeStart && date <= rangeEnd;
    });

  return (
    <section id="github" className="mt-20">
      <div className="mb-10">
        <h2 className="mt-2 text-3xl font-bold">My Daily Contributions</h2>
      </div>

      <div
        className="          
          
          transition-all
          duration-300
        "
      >
        <GitHubCalendar
          username="KalyanSai956"
          colorScheme="dark"
          blockSize={11}
          blockMargin={3}
          fontSize={12}
          showWeekdayLabels
          transformData={filterToJuneDec}
        />
      </div>
    </section>
  );
}

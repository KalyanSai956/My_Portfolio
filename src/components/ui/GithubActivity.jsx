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
    <section id="github" className="mt-20" eyebrow="EDUCATION">
      <div
        className="          
          
          transition-all
          duration-300
        "
      >
        <GitHubCalendar
          username="KalyanSai956"
          colorScheme="dark"
          blockSize={14}
          blockMargin={5}
          fontSize={17}
          showWeekdayLabels
          transformData={filterToJuneDec}
        />
      </div>
    </section>
  );
}

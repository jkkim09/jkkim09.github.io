const events = [
  {
    title: "프로젝트 진행중(Flutter, DevOps)",
    start: getDate("2021-05-10"),
    end: getDate("2021-09-09"),
  },
  {
    title: "프로젝트 미팅",
    start: getDate("2021-06-01T01:30:00+00:00"),
    end: getDate("2021-06-01T11:30:00+00:00"),
  },
  {
    title: "프로젝트 진행중(React)",
    start: getDate("2021-09-10"),
    end: getDate("2021-12-30"),
  },
  {
    title: "아모레퍼시픽 프로젝트 Front-End(React)",
    start: getDate("2022-02-16"),
    end: getDate("2023-10-18"),
  },
  {
    title: "F&F 마케팅 BO Front-End (React)",
    start: getDate("2023-10-25"),
    end: getDate("2023-11-15"),
  },
  {
    title: "LG EV충전기 관제시스템 Front-End 개발 및 리딩 (React)",
    start: getDate("2023-11-28"),
    end: getDate("2024-05-27"),
  },
];

function getDate(dayString) {
  const today = new Date();
  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();

  if (month.length === 1) {
    month = "0" + month;
  }

  return dayString.replace("YEAR", year).replace("MONTH", month);
}

export default events;

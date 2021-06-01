const events = [
    { 
        title: "프로젝트 진행중(Flutter, DevOps)",
        start: getDate("2021-05-10"),
        end: getDate("2021-09-10")
    },
    {
      title: "프로젝트 미팅",
      start: getDate("2021-06-01T01:30:00+00:00"),
      end: getDate("2021-06-01T11:30:00+00:00")
    }
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
  
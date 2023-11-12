const containerTag = document.querySelector(".container");
const sortTags = document.querySelectorAll(".dropdown-item");
sortTags.forEach((element) => {
  element.addEventListener("click", (event) => {
    const sortType = event.target.id;
    if (sortType === "ascending") {
      const videosSortedByAscendingOrder = videos.sort(
        (a, b) => a.uploadDate.getTime() - b.uploadDate.getTime()
      );
      updateSortUI(videosSortedByAscendingOrder);
    } else {
      const videosSortedByDeascendingOrder = videos.sort(
        (a, b) => b.uploadDate.getTime() - a.uploadDate.getTime()
      );
      updateSortUI(videosSortedByDeascendingOrder);
    }
  });
});

const videos = [
  {
    title: "Myanmar Web Developer - Episode 82 - localStorage (Part 1)",
    thumbnail: "./thumbnail_82.png",
    uploadDate: new Date(2023, 10, 1),
  },

  {
    title: "Myanmar Web Developer - Episode 84 - JSON (Part 2)",
    thumbnail: "./thumbnail_85.png",
    uploadDate: new Date(2023, 10, 4),
  },
  {
    title: "Myanmar Web Developer - Episode 84 - JSON (Part 1)",
    thumbnail: "./thumbnail_84.png",
    uploadDate: new Date(2023, 10, 3),
  },
  {
    title: "Myanmar Web Developer - Episode 83 - localStorage (Part 2)",
    thumbnail: "./thumbnail_83.png",
    uploadDate: new Date(2023, 10, 2),
  },
];

videos.forEach((video) => {
  const videoTag = `
  <div class="videoContainer">
  <img src="${video.thumbnail}" class="img" />
  <h6>${video.title}</h6>
  <p>${video.uploadDate.toLocaleDateString()}</p>
  </div>
  `;
  containerTag.innerHTML += videoTag;
});

const updateSortUI = (videos) => {
  containerTag.innerHTML = "";
  videos.forEach((video) => {
    const videoTag = `
  <div class="videoContainer">
  <img src="${video.thumbnail}" class="img" />
  <h6>${video.title}</h6>
  <p>${video.uploadDate.toLocaleDateString()}</p>
  </div>
  `;
    containerTag.innerHTML += videoTag;
  });
};

updateSortUI(videos);

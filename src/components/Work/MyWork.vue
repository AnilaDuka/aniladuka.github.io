<template>
  <div class="page">
    <router-link to="/"
      ><span>{{ back }}</span></router-link
    >
    <div class="allProjects">
      <div class="project">
        <div>
          <img src="@/assets/images/spimSaaS.svg" alt="Spim SaaS" />
          <h2>Spim SaaS</h2>
          <p>Spim is a web app...</p>
        </div>
        <div>
          <button>View More</button>
        </div>
      </div>

      <div class="project">
        <div>
          <img src="@/assets/images/digitWebsite.svg" alt="DigIT Website" />
          <h2>DigIT Website</h2>
          <p>DigIT Website is a project...</p>
        </div>
        <div>
          <button>View More</button>
        </div>
      </div>

      <div class="project">
        <div>
          <img src="@/assets/images/spimWebsite.svg" alt="Spim Website" />
          <h2>Spim Website</h2>
          <p>Spim is a web app...</p>
        </div>
        <div>
          <button>View More</button>
        </div>
      </div>

      <div class="project">
        <div>
          <img src="@/assets/images/biteCosmetics.svg" alt="Bite Cosmetics" />
          <h2>Bite Cosmetics</h2>
          <p>Spim is a web app...</p>
        </div>
        <div>
          <button>View More</button>
        </div>
      </div>

      <div class="project">
        <div>
          <img src="@/assets/images/hmdEcommerce.svg" alt="HMD E-commerce" />
          <h2>Handmade Dresses E-commerce</h2>
          <p>Spim is a web app...</p>
        </div>
        <div>
          <button>View More</button>
        </div>
      </div>

      <div class="project">
        <div>
          <img src="@/assets/images/digitWebsite.svg" alt="DigIT Website" />
          <h2>Ciel De Beaute Website</h2>
          <p>Spim is a web app...</p>
        </div>
        <div>
          <button>View More</button>
        </div>
      </div>

      <div class="project">
        <div>
          <img src="@/assets/images/digitWebsite.svg" alt="DigIT Website" />
          <h2>PopHR Website</h2>
          <p>Spim is a web app...</p>
        </div>
        <div>
          <button>View More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      back: '<- Go back',
    };
  },
};
</script>

<style scoped>
.page {
  width: 80%;
  margin: auto;
}
.page a {
  text-decoration: none;
  color: black;
}
.page span {
  display: flex;
}
.allProjects {
  display: flex;
  flex-wrap: wrap;
  margin: 5% auto;
  justify-content: space-evenly;
}
.project {
  background: #f1f0ef;
  padding: 10px;
  border-radius: 8px;
  text-align: left;
  width: fit-content;
  margin-bottom: 3%;
}
</style>

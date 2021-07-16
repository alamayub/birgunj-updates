<template>
  <div class="ViewNews">
    <div class="container">
      <div class="image__container" data-aos="fade-left">
        <v-img v-if="news.image != null" :src="news.image" :lazy-src="news.image" :alt="news.title" class="img" />
        <img v-else height="200" :src="img" :alt="news.title">
      </div>
      <div class="content__container" data-aos="fade-right">
        <div class="title" style="line-height: 1.25;">{{ news.title }}</div> 
        <div class="h4 mt-2" style="line-height: 1.25;">{{ news.description }}</div>
        <div class="d-flex flex-column mt-3" style="grid-gap: 2px;">
          <b>Published At : <span class="caption">{{ localDate(news.published_at) }}</span></b>
          <b>Author : <span class="caption">{{ news.author }}</span></b>
          <b>Source : <span class="caption">{{ news.source }}</span></b>
          <b>Url : <span class="caption"><a :href="news.url" target="_blank" rel="noopener noreferrer">{{ news.url }}</a></span></b>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data: () => ({
    img: require('@/assets/logo.png'),
  }),
  // metaInfo: () => ({
  //   title: this.title,
  //   meta: [
  //     { name: 'description', content: '' },
  //     { property: 'og:title', content: 'Home - Agram Infotech' },
  //     { property: 'og:site_name', content: 'Birgunj Updates'},
  //     { property: 'og:description', content: 'This is home content' },
  //     { property: 'og:type', content: 'home' },
  //     { property: 'og:url', content: 'https://www.birgunjupdates.com/' },   
  //   ]
  // }),
  computed: {
    news() {
      return JSON.parse(localStorage.getItem("item"))
    }
  },
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(48%, 1fr));
  grid-gap: 20px;
}
.image__container {
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: .5px solid rgb(0 0 0 / 8%);
  border-radius: 4px;
  overflow: hidden;
}
.image__container .img {
  height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
}
b { line-height: 1; }
@media (max-width: 600px) {
  .container { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }
}
</style>
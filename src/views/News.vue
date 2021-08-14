<template>
  <div class="News">
    <div class="news__container container">
      <div class="news__item" v-for="(n ,i) in  news" :key="i" @click="more(n)" data-aos="zoom-in">
        <div class="news__item__img">
          <v-img v-if="n.image != null" :src="n.image" :lazy-src="n.image" :alt="n.title" class="img" />
          <img v-else height="80" :src="img" :alt="n.title">
        </div> 
        <div class="news__item__content pa-3">
          <div class="news__title">{{ n.title }}</div>
          <div class="caption mt-2" style="line-height: 1; opacity: .75;">{{ localDate(n.published_at) }}</div>
        </div>  
      </div>
    </div>  
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    news: [],
    img: require('@/assets/logo.png') 
  }),  
  methods: {
    async getNews() {
      this.$store.commit('SET_OVERLAY', true)  
      await axios.get('http://api.mediastack.com/v1/news?access_key=5793d01d7def7672c6c7dc7f858c0e0f&languages=en&countries=us')
      .then( res => { this.news = res.data.data }).catch( e => console.log(e))
      this.$store.commit('SET_OVERLAY', false)  
    },
    more(item) {
      var title = item.title
      title = title.toLowerCase().split(' ').join('-')
      localStorage.setItem("item", JSON.stringify(item))
      this.$router.push(`/news/${title}`)
    }
  },  
  created() {
    this.getNews()
  }  
}
</script>

<style scoped>
.news__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23%, 1fr));
  grid-gap: 20px;  
}
.news__item {
  transition: 250ms;
  overflow: hidden;
  border: .5px solid rgb(0 0 0 / 10%);
  cursor: pointer;
}
.news__item:hover {
  box-shadow: 0 1px 15px 0 rgb(0 0 0 / 15%);  
  border-radius: 4px;  
  border: .5px solid transparent;
}
.news__item .news__item__img {
  height: 200px;  
  display: flex;
  justify-content: center;
  align-items: center;
}
.news__item .news__item__img .img {
  height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;  
}
.news__title {
  display: -webkit-box;
  width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.25;
}

@media (max-width: 960px) {
  .news__container {
    grid-template-columns: repeat(auto-fit, minmax(32%, 1fr));
    grid-gap: 16px;  
  }  
}
@media (max-width: 500px) {
  .news__container {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    grid-gap: 12px;  
  }  
}
</style>
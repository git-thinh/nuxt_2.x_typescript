<template>
  <div>
    {{ message }}
    <h2>Published articles</h2>
    <article v-for="article in articleList" :key="article.title">
      <h3 v-text="article.title"/>
      <div v-text="article.body"/>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import ApplicationStageModule from "../store/progress/applicationStage";

@Component
export default class HelloWorld extends Vue {
  message: string = "Hello world !";

  articleStore = getModule(ApplicationStageModule, this.$store);

  articleList: any[] = [
    {
      title: "Initial article",
      body:
        "This is the starting point, before we initialize the article store.",
      published: true,
      meta: {}
    }
  ];

  /*
  get articles() {
    return this.articleStore.publishedArticles;
  }
*/

  mounted() {
    this.articleStore.initializeArticles();
    this.articleStore.addArticle();
    this.updateArticles();
  }

  public updateArticles() {
    this.articleList = this.articleStore.allArticles;
  }
}
</script>

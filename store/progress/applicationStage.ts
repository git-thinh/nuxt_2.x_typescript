import {
    Module,
    Action,
    VuexModule,
    Mutation,
    MutationAction
  } from "vuex-module-decorators";
  
  interface Article {
    title: string;
    body: string;
    published: boolean;
    meta: {
      [key: string]: string;
    };
  }
  
  const articles = [
    {
      title: "Hello World!",
      body: "This is a sample article.",
      published: true,
      meta: {}
    },
    {
      title: "My writing career continues!",
      body: `...but I've run out of things to say.`,
      published: false,
      meta: {}
    }
  ];
  
  @Module({
    name: "applicationStage",
    stateFactory: true,
    namespaced: true
  })
  export default class ApplicationStageModule extends VuexModule {
    articles: Article[] = [
      {
        title: "Initial article",
        body:
          "This is the starting point, before we initialize the article store.",
        published: true,
        meta: {}
      }
    ];
  
    get allArticles() {
      return this.articles;
    }
  
    get publishedArticles() {
      return this.articles.filter(article => article.published);
    }
  
    @MutationAction({ mutate: ["articles"] })
    async initializeArticles() {
      return { articles };
    }
  
    @Mutation
    addArticle() {
      this.articles.push({
        title: "Hello World 2!",
        body: "This is a sample article 2.",
        published: true,
        meta: {}
      });
    }
  }
  
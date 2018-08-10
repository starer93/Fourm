const tweets = [{
        id: 1,
        name: 'ABX company',
        img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        tweet: "If you don't succeed, dust yourself off and try again.",
        jd: "here is some random",
        date:"11-04-2018",
        likes: 10,
    },
    {
        id: 2,
        name: 'Fatima',
        img: 'https://semantic-ui.com/images/avatar2/large/molly.png',
        tweet: 'Better late than never but never late is better.',
        jd: "here is some random description,asdafasfasfadsfadfalk",
        date:"11-04-2018",
        likes: 12,
    },
    {
        id: 3,
        name: 'Xin',
        img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',
        tweet: 'Beauty in the struggle, ugliness in the success.',
        jd: "here is some random description,asdafasfasfadsfadfalß",
        date:"11-04-2018",
        likes: 18,
    }
]

Vue.component('tweet-component', {
    template: `
    <div class="tweet">
      <div class="box">
        <article class="media">
          <div class="media-left">
              <img :src="tweet.img" alt="Image">
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{tweet.name}}</strong>
                <br>
                {{tweet.jd}}
              </p>
              <p> <small>{{tweet.date}}</small></p>
            </div>
          </div>
        </article>
      </div>

      <hr/>
    </div> 
  `,
    props: {
        tweet: Object
    }
});

new Vue({
    el: '#app',
    data: {
        tweets
    },
    methods: {
        shuffle() {
            this.tweets = _.shuffle(this.tweets)
        }
    },
});
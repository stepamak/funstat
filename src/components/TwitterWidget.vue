<template>
  <div>
    <div id="tweet-container"></div>
  </div>
</template>

<script>
export default {
  props: {
    tweetId: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.loadTwitterScript()
  },
  methods: {
    loadTwitterScript() {
      if (!window.twttr) {
        const script = document.createElement('script')
        script.src = 'https://platform.twitter.com/widgets.js'
        script.onload = this.embedTweet
        document.body.appendChild(script)
      } else {
        this.embedTweet()
      }
    },
    embedTweet() {
      window.twttr.ready(() => {
        window.twttr.widgets.createTweet(
          this.tweetId, // ID твита
          document.getElementById('tweet-container'),
          {
            align: 'center',
          },
        )
      })
    },
  },
}
</script>

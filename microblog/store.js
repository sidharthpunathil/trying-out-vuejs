import { reactive, computed } from 'vue'
import { testposts } from './testpost.js'

class Store {
    constructor() {
        this.state = reactive({
            posts: testposts,
            currentHashtag: null
        })
    }

    get filteredPosts() {
        return computed(() => {
            if(!this.state.currentHashtag) {
                return this.state.posts
            }

            return this.state.posts.filter(
                post => post.hashtag.includes(
                    this.state.currentHashtag
                )
            )
        })
    }

    setHashtag(tag) {
        this.state.currentHashtag = tag 
    }

    incrementLike(post) {
        const thePost = this.state.posts.find(x => x.id === post.id)
        if(!thePost) {
            return 
        }
       thePost.likes += 1
    }
}

export const store  = new Store()

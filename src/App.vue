<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h1>Toucan Object explorer</h1>
        <h2>Test by Taehwa Kim</h2>

        <section class="tree-area">
            <tree :treeData="obj"></tree>

            <button type="button" class="btn-send" v-on:click="submit();">Send</button>
        </section>

    </div>


</template>

<script>
    import Tree from './Tree.vue'

    export default {
        name: 'app',
        components: {
            Tree
        },
        data () {
            return {
                obj: {
                    super: {
                        prop: {
                            nested: 'reall'
                        },
                        other: 'hey'
                    },
                    stuff: 'yeah'
                }
            }
        },
        methods : {
            submit: function() {
                console.log('display obj', this.obj);
            }
        }
    }



</script>


<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .tree-area{
        width: 500px;
        margin: 0 auto;
        padding: 15px;
        background: #eee;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>



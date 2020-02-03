<template>

    <div class="v-catalog">
        <v-catalog-item
                v-for="product in filteredByBrand(sortBrand)"
                :key="product._id"
                :product_data="product"
        />

    </div>
</template>

<script>

    import vCatalogItem from './v-catalog-item'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "v-catalog",
        components: {
            vCatalogItem
        },
        props: {
            sortQuery: {
                type: String,
                default() {
                    return ''
                }
            },
            sortArrow: {
                type: Number,
                default() {
                    return null
                }
            },
            sortBrand: {
                type: String,
                default() {
                    return null
                }
            }
        },
        data() {
            return {}
        },

        computed: {
            ...mapGetters([
                'PRODUCTS',
            ]),


        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
            ]),

            sortByCategories(sortQuery, sortArrow) {
                if (sortQuery === '') {
                    return this.PRODUCTS
                } else {

                    switch (typeof this.PRODUCTS[0][sortQuery]) {
                        case "number":
                            return [...this.PRODUCTS].sort((a, b) => {
                                const isReversed = sortArrow ? 1 : -1;
                                return isReversed * (a[sortQuery] - b[sortQuery])
                            });
                        case "string":
                            return [...this.PRODUCTS].sort((a, b) => {
                                const isReversed = sortArrow ? 1 : -1;
                                return isReversed * a[sortQuery].localeCompare(b[sortQuery])
                            });

                        default:
                            return this.PRODUCTS
                    }

                }


            },

            filteredByBrand(sortBrand){
                if (!sortBrand || sortBrand === "All") {
                    return  this.sortByCategories(this.sortQuery, this.sortArrow)
                }
               return  this.sortByCategories(this.sortQuery, this.sortArrow)
                    .filter(item=>item.name===this.sortBrand)
            }

        },

        watch: {},
        mounted() {
            this.GET_PRODUCTS_FROM_API()
                .then((response) => {
                    if (response.data) {
                        console.log(response.data, 'OK!');
                    }
                })
        }
    }


</script>

<style>
    .v-catalog {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

</style>
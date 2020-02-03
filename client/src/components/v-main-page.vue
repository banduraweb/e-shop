<template>
    <div class="v-main-page">SORT BY

        <ul class="brands">
            <li class="card__button card__button--brands"
                 v-for="brand in BRANDS"
                :key="brand">
                <p v-on:click="getFilterBrand(brand)">{{brand}}</p>
            </li>
        </ul>

        <div class="buttons-sort">

            <div class="buttons-sort__item"
                 v-for="item in FILTER_TYPES"
                 :key="item"
            ><p>{{item}}</p>
                <button class="card__button card__button--sort" v-on:click="getFilterType(item,1)">&#8593;</button>
                <button class="card__button card__button--sort" v-on:click="getFilterType(item, 0)">&#8595;</button>
            </div>

        </div>
        <v-catalog
                :sortQuery="query"
                :sortArrow="queryArrow"
                :sortBrand="queryBrand"
        />

    </div>

</template>


<script>
    import vCatalog from './v-catalog';

    export default {
        name: "v-main-page",
        components: {
            vCatalog
        },
        props: {},
        data() {
            return {
                FILTER_TYPES: [
                    "name",
                    'memory',
                    'hardDrive',
                    'price',
                    'power',
                    'weight',
                    'display',
                    'microprocessor'
                ],

                BRANDS: ["All", "Apple", "Dell", "Panasonic", "Toshiba","Aser", "HP", "Asus", "Sony"],

                query: '',
                queryArrow: null,
                queryBrand: null
            }

        },

        computed: {},
        methods: {
            getFilterType: function (filterType, arrow) {
                this.query = filterType;
                this.queryArrow = arrow;
            },

            getFilterBrand: function (filterBrand) {
                this.queryBrand = filterBrand;
            }
        },
        watch: {}

    }
</script>

<style lang="scss">
    .v-main-page {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
    }

    .buttons-sort {
        flex-wrap: wrap;
        display: flex;
        justify-content: center;

        &__item {
            background-color: lavender;
            margin: 5px;
            border-radius: 3px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .brands {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

</style>

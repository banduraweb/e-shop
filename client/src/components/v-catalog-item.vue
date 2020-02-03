<template>
    <div class="v-catalog-item">


        <div class="card__item-img"><img v-bind:src="product_data.img_photo" alt=""></div>
        <p class="card__item-title">{{product_data.product}} {{product_data.name}} #{{product_data.productNumber}}</p>

        <div class="card__item-rate rate__details description">
            <div class="rate__details-stars">
                <p class="rate__details-star rate__details-star--isActive"></p>
                <p class="rate__details-star rate__details-star--isActive"></p>
                <p class="rate__details-star rate__details-star--isActive"></p>
                <p class="rate__details-star rate__details-star--isActive"></p>
                <p class="rate__details-star"></p>
            </div>
            <p class="rate__details-title description">
                Rate: 5
            </p>
        </div>
        <div class="card__item-specification specification__details">
            <p class="specification__details-title description">
                specification:
            </p>

            <p class="specification__details-total">
                {{product_data.price}} UAH
            </p>

        </div>
        <div class="card__item-specification specification__details">
            <p class="specification__details-title description">
                Processor:
            </p>

            <p class="specification__details-total">
                {{product_data.microprocessor}} Ghz
            </p>

        </div>
        <div class="card__item-specification specification__details">
            <p class="specification__details-title description">
                Memory:
            </p>

            <p class="specification__details-total">
                {{product_data.memory}} GB
            </p>

        </div>
        <div class="card__item-specification specification__details">
            <p class="specification__details-title description">
                Display:
            </p>

            <p class="specification__details-total">
                {{product_data.display}} d
            </p>

        </div>
        <div class="card__item-specification specification__details">
            <p class="specification__details-title description">
                Hard Drive:
            </p>

            <p class="specification__details-total">
                {{product_data.hardDrive}} GB
            </p>

        </div>
        <div class="card__item-specification specification__details">
            <p class="specification__details-title description">
                Weight:
            </p>

            <p class="specification__details-total">
                {{product_data.weight}} Grm
            </p>

        </div>
        <div class="card__item-specification specification__details">
            <p class="specification__details-title description">
                Power:
            </p>

            <p class="specification__details-total">
                {{product_data.power}} ve
            </p>

        </div>
        <a class="card__link" href="#">
            <button class="card__button">Buy</button>
        </a>

    </div>


</template>

<script>
    export default {
        name: "v-catalog-item",
        props: {
            product_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
    }


</script>

<style lang="scss">

    .v-catalog-item {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: 10px;
        margin: 5px;
        box-sizing: border-box;
        width: 275px;
        border: 1px solid #f3f3f3;
        border-radius: 5px;
    }

</style>
dmx.config({
  "index": {
    "repeat1": {
      "meta": [
        {
          "type": "number",
          "name": "cat_id"
        },
        {
          "type": "text",
          "name": "en_name"
        },
        {
          "type": "text",
          "name": "bn_name"
        },
        {
          "type": "text",
          "name": "hin_name"
        },
        {
          "type": "text",
          "name": "image"
        }
      ],
      "outputType": "array"
    },
    "repeatProduct": {
      "meta": [
        {
          "name": "p_id",
          "type": "number"
        },
        {
          "name": "prod_id",
          "type": "text"
        },
        {
          "name": "prod_mark_id",
          "type": "number"
        },
        {
          "name": "prod_name_en",
          "type": "text"
        },
        {
          "name": "prod_name_bn",
          "type": "text"
        },
        {
          "name": "prod_name_hin",
          "type": "text"
        },
        {
          "name": "prod_img1",
          "type": "text"
        },
        {
          "name": "quantity",
          "type": "text"
        },
        {
          "name": "q_unit",
          "type": "text"
        },
        {
          "name": "mrp",
          "type": "text"
        },
        {
          "name": "price",
          "type": "text"
        },
        {
          "name": "product_tax",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "repeatCategory": {
      "meta": [
        {
          "type": "number",
          "name": "cat_id"
        },
        {
          "type": "text",
          "name": "en_name"
        },
        {
          "type": "text",
          "name": "bn_name"
        },
        {
          "type": "text",
          "name": "hin_name"
        },
        {
          "type": "text",
          "name": "image"
        }
      ],
      "outputType": "array"
    },
    "repeatCat": {
      "meta": [
        {
          "name": "offset",
          "type": "number"
        },
        {
          "name": "limit",
          "type": "number"
        },
        {
          "name": "total",
          "type": "number"
        },
        {
          "name": "page",
          "type": "object",
          "sub": [
            {
              "name": "offset",
              "type": "object",
              "sub": [
                {
                  "name": "first",
                  "type": "number"
                },
                {
                  "name": "prev",
                  "type": "number"
                },
                {
                  "name": "next",
                  "type": "number"
                },
                {
                  "name": "last",
                  "type": "number"
                }
              ]
            },
            {
              "name": "current",
              "type": "number"
            },
            {
              "name": "total",
              "type": "number"
            }
          ]
        },
        {
          "name": "data",
          "type": "array",
          "sub": [
            {
              "type": "number",
              "name": "id"
            },
            {
              "type": "text",
              "name": "en_name"
            },
            {
              "type": "text",
              "name": "bn_name"
            },
            {
              "type": "text",
              "name": "hin_name"
            },
            {
              "type": "text",
              "name": "image"
            }
          ]
        }
      ],
      "outputType": "object"
    },
    "repeatProd": {
      "meta": [
        {
          "name": "p_id",
          "type": "number"
        },
        {
          "name": "prod_id",
          "type": "text"
        },
        {
          "name": "prod_mark_id",
          "type": "number"
        },
        {
          "name": "prod_name_en",
          "type": "text"
        },
        {
          "name": "prod_name_bn",
          "type": "text"
        },
        {
          "name": "prod_name_hin",
          "type": "text"
        },
        {
          "name": "prod_img1",
          "type": "text"
        },
        {
          "name": "quantity",
          "type": "text"
        },
        {
          "name": "q_unit",
          "type": "text"
        },
        {
          "name": "mrp",
          "type": "text"
        },
        {
          "name": "price",
          "type": "text"
        },
        {
          "name": "product_tax",
          "type": "text"
        }
      ],
      "outputType": "array"
    }
  },
  "main": {
    "repeatlanguage": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "type": "text",
          "name": "language_name"
        },
        {
          "type": "text",
          "name": "language_code"
        }
      ],
      "outputType": "array"
    },
    "varLanguage": {
      "meta": [],
      "outputType": "text"
    }
  },
  "cart": {
    "repeatcart": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "prod_id"
        },
        {
          "type": "number",
          "name": "price_id"
        },
        {
          "type": "number",
          "name": "user_id"
        },
        {
          "type": "text",
          "name": "prod_unit_price"
        },
        {
          "type": "text",
          "name": "prod_qty"
        },
        {
          "type": "text",
          "name": "total_price"
        },
        {
          "type": "text",
          "name": "prod_name_en"
        },
        {
          "type": "text",
          "name": "prod_name_bn"
        },
        {
          "type": "text",
          "name": "prod_name_hin"
        },
        {
          "type": "text",
          "name": "prod_desc_en"
        },
        {
          "type": "text",
          "name": "prod_desc_bn"
        },
        {
          "type": "text",
          "name": "prod_desc_hin"
        },
        {
          "type": "text",
          "name": "prod_img1"
        },
        {
          "type": "text",
          "name": "quantity"
        },
        {
          "type": "text",
          "name": "q_unit"
        },
        {
          "type": "text",
          "name": "mrp"
        },
        {
          "type": "text",
          "name": "price"
        },
        {
          "type": "text",
          "name": "product_tax"
        }
      ],
      "outputType": "array"
    }
  },
  "wishlist": {
    "repeatProd": {
      "meta": [
        {
          "name": "id",
          "type": "number"
        },
        {
          "name": "prod_id",
          "type": "number"
        },
        {
          "name": "price_id",
          "type": "number"
        },
        {
          "name": "user_id",
          "type": "text"
        },
        {
          "name": "prod_unit_price",
          "type": "text"
        },
        {
          "name": "wishlist_mrp",
          "type": "text"
        },
        {
          "name": "prod_qty",
          "type": "text"
        },
        {
          "name": "total_price",
          "type": "text"
        },
        {
          "name": "prod_name_en",
          "type": "text"
        },
        {
          "name": "prod_name_bn",
          "type": "text"
        },
        {
          "name": "prod_name_hin",
          "type": "text"
        },
        {
          "name": "prod_desc_en",
          "type": "text"
        },
        {
          "name": "prod_desc_bn",
          "type": "text"
        },
        {
          "name": "prod_desc_hin",
          "type": "text"
        },
        {
          "name": "prod_img1",
          "type": "text"
        },
        {
          "name": "prod_mark_id",
          "type": "number"
        },
        {
          "name": "shop_name_en",
          "type": "text"
        },
        {
          "name": "shop_name_bn",
          "type": "text"
        },
        {
          "name": "shop_name_hin",
          "type": "text"
        },
        {
          "name": "rest_id",
          "type": "number"
        },
        {
          "name": "price",
          "type": "array",
          "sub": [
            {
              "name": "price_ids",
              "type": "number"
            },
            {
              "name": "quantity",
              "type": "text"
            },
            {
              "name": "q_unit",
              "type": "text"
            },
            {
              "name": "mrp",
              "type": "text"
            },
            {
              "name": "price",
              "type": "text"
            },
            {
              "name": "product_tax",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    }
  },
  "shopdetails": {
    "repeatRestProd": {
      "meta": [
        {
          "name": "id",
          "type": "number"
        },
        {
          "name": "prod_id",
          "type": "text"
        },
        {
          "name": "rest_id",
          "type": "number"
        },
        {
          "name": "prod_mark_id",
          "type": "number"
        },
        {
          "name": "prod_name_en",
          "type": "text"
        },
        {
          "name": "prod_name_bn",
          "type": "text"
        },
        {
          "name": "prod_name_hin",
          "type": "text"
        },
        {
          "name": "prod_img1",
          "type": "text"
        },
        {
          "name": "price",
          "type": "array",
          "sub": [
            {
              "name": "price_id",
              "type": "number"
            },
            {
              "name": "quantity",
              "type": "text"
            },
            {
              "name": "q_unit",
              "type": "text"
            },
            {
              "name": "mrp",
              "type": "text"
            },
            {
              "name": "price",
              "type": "text"
            },
            {
              "name": "product_tax",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    }
  },
  "productdetails": {
    "RelatedProd": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "prod_id"
        },
        {
          "type": "number",
          "name": "prod_occurance_id"
        },
        {
          "type": "text",
          "name": "prod_name_en"
        },
        {
          "type": "text",
          "name": "prod_name_bn"
        },
        {
          "type": "text",
          "name": "prod_name_hin"
        },
        {
          "type": "text",
          "name": "prod_img1"
        },
        {
          "type": "number",
          "name": "price_id"
        },
        {
          "type": "text",
          "name": "quantity"
        },
        {
          "type": "text",
          "name": "q_unit"
        },
        {
          "type": "text",
          "name": "mrp"
        },
        {
          "type": "text",
          "name": "purchase_price"
        },
        {
          "type": "text",
          "name": "price"
        }
      ],
      "outputType": "array"
    }
  },
  "login": {
    "sessionStorage": [
      {
        "type": "text",
        "name": "sessionLogin"
      }
    ]
  },
  "checkout": {
    "repeat1": {
      "meta": [
        {
          "name": "id",
          "type": "number"
        },
        {
          "name": "prod_id",
          "type": "number"
        },
        {
          "name": "price_id",
          "type": "number"
        },
        {
          "name": "user_id",
          "type": "text"
        },
        {
          "name": "prod_unit_price",
          "type": "text"
        },
        {
          "name": "cart_mrp",
          "type": "text"
        },
        {
          "name": "prod_qty",
          "type": "text"
        },
        {
          "name": "total_price",
          "type": "text"
        },
        {
          "name": "prod_name_en",
          "type": "text"
        },
        {
          "name": "prod_name_bn",
          "type": "text"
        },
        {
          "name": "prod_name_hin",
          "type": "text"
        },
        {
          "name": "prod_desc_en",
          "type": "text"
        },
        {
          "name": "prod_desc_bn",
          "type": "text"
        },
        {
          "name": "prod_desc_hin",
          "type": "text"
        },
        {
          "name": "prod_img1",
          "type": "text"
        },
        {
          "name": "prod_mark_id",
          "type": "number"
        },
        {
          "name": "shop_name_en",
          "type": "text"
        },
        {
          "name": "shop_name_bn",
          "type": "text"
        },
        {
          "name": "shop_name_hin",
          "type": "text"
        },
        {
          "name": "rest_id",
          "type": "number"
        },
        {
          "name": "price",
          "type": "array",
          "sub": [
            {
              "name": "price_ids",
              "type": "number"
            },
            {
              "name": "quantity",
              "type": "text"
            },
            {
              "name": "q_unit",
              "type": "text"
            },
            {
              "name": "mrp",
              "type": "text"
            },
            {
              "name": "price",
              "type": "text"
            },
            {
              "name": "product_tax",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    }
  }
});

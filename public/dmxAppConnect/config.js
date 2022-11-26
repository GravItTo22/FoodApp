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
    },
    "repeatReviewList": {
      "meta": [
        {
          "name": "review_value",
          "type": "number"
        },
        {
          "name": "review_comment",
          "type": "text"
        },
        {
          "name": "created_on",
          "type": "text"
        },
        {
          "name": "updated_on",
          "type": "text"
        },
        {
          "name": "fname",
          "type": "text"
        },
        {
          "name": "lname",
          "type": "text"
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
  },
  "myorder": {
    "dvOrderList": {
      "meta": [
        {
          "name": "id",
          "type": "number"
        },
        {
          "name": "order_id",
          "type": "text"
        },
        {
          "name": "total_amt",
          "type": "text"
        },
        {
          "name": "discount",
          "type": "text"
        },
        {
          "name": "delevery_amt",
          "type": "text"
        },
        {
          "name": "user_name",
          "type": "text"
        },
        {
          "name": "address",
          "type": "text"
        },
        {
          "name": "mobile",
          "type": "text"
        },
        {
          "name": "pin",
          "type": "text"
        },
        {
          "name": "dist",
          "type": "text"
        },
        {
          "name": "state",
          "type": "text"
        },
        {
          "name": "wallet_bal",
          "type": "text"
        },
        {
          "name": "created_on",
          "type": "text"
        },
        {
          "name": "updated_on",
          "type": "text"
        },
        {
          "name": "status",
          "type": "number"
        },
        {
          "name": "product",
          "type": "array",
          "sub": [
            {
              "name": "p_id",
              "type": "number"
            },
            {
              "name": "prod_name",
              "type": "text"
            },
            {
              "name": "rest_id",
              "type": "number"
            },
            {
              "name": "shop_name",
              "type": "text"
            },
            {
              "name": "shop_address",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "ddOrderList": {
      "meta": [
        {
          "name": "id",
          "type": "number"
        },
        {
          "name": "order_id",
          "type": "text"
        },
        {
          "name": "total_amt",
          "type": "text"
        },
        {
          "name": "discount",
          "type": "text"
        },
        {
          "name": "delevery_amt",
          "type": "text"
        },
        {
          "name": "user_name",
          "type": "text"
        },
        {
          "name": "address",
          "type": "text"
        },
        {
          "name": "mobile",
          "type": "text"
        },
        {
          "name": "pin",
          "type": "text"
        },
        {
          "name": "dist",
          "type": "text"
        },
        {
          "name": "state",
          "type": "text"
        },
        {
          "name": "wallet_bal",
          "type": "text"
        },
        {
          "name": "created_on",
          "type": "text"
        },
        {
          "name": "updated_on",
          "type": "text"
        },
        {
          "name": "status",
          "type": "number"
        },
        {
          "name": "product",
          "type": "array",
          "sub": [
            {
              "name": "p_id",
              "type": "number"
            },
            {
              "name": "prod_name",
              "type": "text"
            },
            {
              "name": "rest_id",
              "type": "number"
            },
            {
              "name": "shop_name",
              "type": "text"
            },
            {
              "name": "shop_address",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "repeat1": {
      "meta": [
        {
          "name": "id",
          "type": "number"
        },
        {
          "name": "order_id",
          "type": "text"
        },
        {
          "name": "total_amt",
          "type": "text"
        },
        {
          "name": "discount",
          "type": "text"
        },
        {
          "name": "delevery_amt",
          "type": "text"
        },
        {
          "name": "user_name",
          "type": "text"
        },
        {
          "name": "address",
          "type": "text"
        },
        {
          "name": "mobile",
          "type": "text"
        },
        {
          "name": "pin",
          "type": "text"
        },
        {
          "name": "dist",
          "type": "text"
        },
        {
          "name": "state",
          "type": "text"
        },
        {
          "name": "wallet_bal",
          "type": "text"
        },
        {
          "name": "created_on",
          "type": "text"
        },
        {
          "name": "updated_on",
          "type": "text"
        },
        {
          "name": "status",
          "type": "number"
        },
        {
          "name": "product",
          "type": "array",
          "sub": [
            {
              "name": "p_id",
              "type": "number"
            },
            {
              "name": "prod_name",
              "type": "text"
            },
            {
              "name": "rest_id",
              "type": "number"
            },
            {
              "name": "shop_name",
              "type": "text"
            },
            {
              "name": "shop_address",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    }
  },
  "orderdetails": {
    "dvOrderDetails": {
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
          "name": "price_id",
          "type": "number"
        },
        {
          "name": "prod_qty",
          "type": "text"
        },
        {
          "name": "each_unit_price",
          "type": "text"
        },
        {
          "name": "each_net_amt",
          "type": "text"
        },
        {
          "name": "order_status",
          "type": "number"
        },
        {
          "name": "created_on",
          "type": "text"
        },
        {
          "name": "updated_on",
          "type": "text"
        },
        {
          "name": "prod_name",
          "type": "text"
        },
        {
          "name": "prod_img1",
          "type": "text"
        },
        {
          "name": "shop_name",
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
        }
      ],
      "outputType": "array"
    },
    "ddOrderDetails": {
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
          "name": "price_id",
          "type": "number"
        },
        {
          "name": "prod_qty",
          "type": "text"
        },
        {
          "name": "each_unit_price",
          "type": "text"
        },
        {
          "name": "each_net_amt",
          "type": "text"
        },
        {
          "name": "order_status",
          "type": "number"
        },
        {
          "name": "created_on",
          "type": "text"
        },
        {
          "name": "updated_on",
          "type": "text"
        },
        {
          "name": "prod_name",
          "type": "text"
        },
        {
          "name": "prod_img1",
          "type": "text"
        },
        {
          "name": "shop_name",
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
        }
      ],
      "outputType": "array"
    },
    "repeatdetails": {
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
          "name": "price_id",
          "type": "number"
        },
        {
          "name": "prod_qty",
          "type": "text"
        },
        {
          "name": "each_unit_price",
          "type": "text"
        },
        {
          "name": "each_net_amt",
          "type": "text"
        },
        {
          "name": "order_status",
          "type": "number"
        },
        {
          "name": "created_on",
          "type": "text"
        },
        {
          "name": "updated_on",
          "type": "text"
        },
        {
          "name": "prod_name",
          "type": "text"
        },
        {
          "name": "prod_img1",
          "type": "text"
        },
        {
          "name": "shop_name",
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
        }
      ],
      "outputType": "array"
    }
  },
  "placeorder": {
    "repeat2": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "mobile"
        },
        {
          "type": "text",
          "name": "address1"
        },
        {
          "type": "text",
          "name": "address2"
        },
        {
          "type": "text",
          "name": "ps"
        },
        {
          "type": "text",
          "name": "district"
        },
        {
          "type": "text",
          "name": "state"
        },
        {
          "type": "text",
          "name": "country"
        },
        {
          "type": "text",
          "name": "pin"
        },
        {
          "type": "number",
          "name": "status"
        }
      ],
      "outputType": "array"
    }
  }
});

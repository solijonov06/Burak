import mongoose, { Schema } from "mongoose";

// Define ProductVolume enum directly here to avoid import errors
export enum ProductVolume {
  ONE = "ONE",
  TWO = "TWO",
  THREE = "THREE",
  // add other volumes as needed
}

// Define ProductSize enum directly here to avoid import errors
export enum ProductSize {
  NORMAL = "NORMAL",
  LARGE = "LARGE",
  SMALL = "SMALL",
  // add other sizes as needed
}

// Define enums directly here to avoid import errors
export enum ProductStatus {
  ACTIVE = "ACTIVE",
  PAUSE = "PAUSE",
  // add other statuses as needed
}

export enum ProductCollection {
  COLLECTION1 = "COLLECTION1",
  COLLECTION2 = "COLLECTION2",
  DISH = "DISH",
  // add other collections as needed
}

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: Object.values(ProductStatus),
      default: ProductStatus.PAUSE,
    },

    productCollection: {
      type: String,
      enum: ProductCollection,
      required: true,
    },

    productName: {
      type: String,
      required: true,
    },

    productPrice: {
      type: Number,
      required: true,
    },

    productLeftCount: {
      type: Number,
      required: true,
    },
    productSize: {
      type: String,
     enum: ProductSize,
     default: ProductSize.NORMAL, // Default size
    },
    productImages: {
      type: [String],
      required: true,
    },
    productDesc: {
      type: String,
  
    },
    productVolume: {
      type: String,
      enum: ProductVolume,
     default: ProductVolume.ONE, // Default volume
     
    },
    productViews: {
      type: Number,
      default: 0, // Default view count
    }
  },
  { timestamps: true } // updatedAt, createdAt
);
productSchema.index({ productName: 1, ProductSize:1, productVolume: 1}, {unique: true}); // Create a text index for productName
export default mongoose.model("Product", productSchema);

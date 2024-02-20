import mongoose from "mongoose";

const MoviesSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    imgTitle: {
      type: String,
    },
    imgSm: {
      type: String,
    },
    trailer: {
      type: String,
    },
    video: {
      type: String,
    },
    year: {
      type: String,
    },
    ageLimit: {
      type: Number,
    },
    genre: {
      type: String,
    },
    isSeries: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Movies", MoviesSchema);

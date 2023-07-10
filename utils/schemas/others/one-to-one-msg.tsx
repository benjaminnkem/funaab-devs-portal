import mongoose from "mongoose";

const oneToOneMessageSchema = new mongoose.Schema({
  users: {
    type: Array,
    require: true,
  },
  dateStarted: { type: Date, require: true },
});

export default mongoose.models.OneToOneMessageModel || mongoose.model("OneToOneMessageModel", oneToOneMessageSchema);

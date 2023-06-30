export default function handler(req, res) {
  try {
    if (req.method === "POST") {
      return res.status(200).json({ message: "Congrats" });
    } else {
      res.status(202).json({ message: `The method ${req.method} is unsupported` });
    }
  } catch (e) {
    console.log(e);
  }
}

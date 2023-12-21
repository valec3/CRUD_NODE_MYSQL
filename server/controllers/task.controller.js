//  crud task
import db from "../db.js";
export const createThing = (req, res) => {
  const { title, description } = req.body;
  const newThing = {
    title,
    description,
  };
  db.query("INSERT INTO task set ?", [newThing], (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ message: "Task created" });
    }
  });
};

export const getThings = (req, res) => {};

export const updateThing = (req, res) => {};

export const deleteThing = (req, res) => {};

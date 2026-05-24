import express from "express";
import Location from "../models/Location.js";

const router = express.Router();

router.get("/", async (req, res) => {

  try {

    const locations = await Location.find();

    res.json(locations);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});
router.get("/", async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {

  try {

    const {
      name,
      description,
      image,
      whatsapp,
    } = req.body;

    const newLocation = new Location({

      name,
      description,
      image,
      whatsapp,

    });

    const savedLocation =
      await newLocation.save();

    res.status(201).json(
      savedLocation
    );

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

router.post("/", async (req, res) => {

  try {

    const newLocation = new Location(req.body);

    const savedLocation =
      await newLocation.save();

    res.status(201).json(savedLocation);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.delete("/:id", async (req, res) => {

  try {

    const location =
      await Location.findByIdAndDelete(
        req.params.id
      );

    if (!location) {

      return res.status(404).json({

        message: "Location not found",

      });

    }

    res.json({

      message:
        "Location deleted successfully",

    });

  } catch (error) {

    res.status(500).json({

      message: error.message,

    });

  }

});

export default router;
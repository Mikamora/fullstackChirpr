import * as express from 'express';
import db from "./db";

const router = express.Router();
//chirps
router.get("/api/chirps", async (req, res) => {
    try {
      res.json(await db.Chirps.all());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
  });
  
  router.get('/api/chirps/:id', async (req, res) => {
      try {
        res.json((await db.Chirps.one(req.params.id))[0]);
      } catch(e) {
          console.log(e);
          res.sendStatus(500);
      }
});

router.post("/api/chirps", async (req, res) => {
    const chirp = req.body;

    try {
        res.status(201).send(await db.Chirps.post(chirp));
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

router.put("/api/chirps/:id", async (req, res) => {
    const chirpid = Number(req.params.id);
    const chirp = req.body;

    try {
        await db.Chirps.put(chirp, chirpid);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

router.delete("/api/chirps/:id", async (req, res) => {
    const chirpid = Number(req.params.id);

    try {
        await db.Chirps.destroy(chirpid);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

//mentions
router.get('/api/mentions/:id', async (req, res) => {
    try {
      res.json((await db.mentions.one(req.params.id))[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});
router.post("/api/mentions", async (req, res) => {
    const mentions1 = req.body.chirpid;
    const mentions2 = req.body.userid;

    try {
        res.status(201).send(await db.mentions.post(mentions1, mentions2));
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});
router.delete("/api/mentions/:id", async (req, res) => {
    const mentions1 = req.body.chirpid;

    try{
        await db.mentions.destroy(mentions1);
        res.status(200);
    } catch (e) {
        console.log(e);
        res.json(e);
    }
})






//users
router.get("/api/users", async (req, res) => {
    try {
      res.json(await db.users.all());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
  });
  
  router.get('/api/users/:id', async (req, res) => {
      try {
        res.json((await db.users.one(req.params.id))[0]);
      } catch(e) {
          console.log(e);
          res.sendStatus(500);
      }
});

router.post("/api/users", async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const pass = req.body.password;

    try {
        res.status(201).send(await db.users.post(username,email,pass));
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

router.get("/api/users/:id", async (req, res) => {
    const username = req.body.username;

    try {
        await db.users.findUserByName(username);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

router.delete("/api/users/:id", async (req, res) => {
    const userid = Number(req.params.id);

    try {
        await db.users.destroy(userid);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});


export default router;
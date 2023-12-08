const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const getPosts = async (req, res) => {
    const allPost = await prisma.post.findMany();
    res.json({data:allPost});
    
};

const postPosts = async (req, res) => {
    if(!req.body.name || !req.body.description) return res.status(400).send("Incomplete data");
    const newPost = await prisma.post.create({
        data: {
            name: req.body.name,
            description: req.body.description,
        },
    });
    res.json({data:newPost});
    
};

const deletePosts = async (req, res) => {
    const deletePost = await prisma.post.delete({ where: { id: req.body.id } });
    res.json({data: deletePost});
    
};

module.exports = {
    getPosts,
    postPosts,
    deletePosts,
}
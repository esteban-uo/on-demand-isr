export default async function handler(req, res) {   
    try {
      await res.revalidate('/')
      return res.json({ revalidated: true })
    } catch (err) {
      console.log(err)
      return res.status(500).send('Error revalidating')
    }
  }

import prisma from "lib/prisma"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { trip, name, date, amount, currency } = req.body
        if (!trip) {
            return res
            .status(400)
            .json({message: 'Missing required parameter trip'})
        }
        if (!name) {
            return res
            .status(400)
            .json({message: 'Missing required parameter name'})
        }
        if (!amount) {
            return res
            .status(400)
            .json({message: 'Missing required parameter amount'})
        }
        if (!currency) {
            return res
            .status(400)
            .json({message: 'Missing required parameter currency'})
        }
        await prisma.expense.create({
            data: {
                trip,
                name,
                amount,
                currency,
            }
        })
        res.status(200).end()
        return









        res.status(200).json(trips)
        return
    }
    
    if (req.method === 'POST') {
        const {user, name, start_date, end_date} = req.body
       
    }
    
   
    res.status(405).json({message: 'Method not Allowed'})
}
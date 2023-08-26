import express from 'express';
import routes from './routes';
import cors from 'cors';
import { responseInterceptor } from './interceptors/responseInterceptor'; 
import { sendMessage } from './controllers/communicationController'; 

const app = express();
const port = 8080;

app.use(express.json());
app.use(routes);
app.use(responseInterceptor); 
app.use(cors());

app.post('/api/earth-mars-comm/message', sendMessage); 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { CardElements } from 'models/card.model';

export const Layout: React.FC<CardElements> = ({cardDescription: description, cardPrice: price, cardImageUrl: image,cardTitle: title}) => {
    return (
        <div>
            <section className="main-content">
                <div className="container">
                    <div className="section">   
                        <Card sx={{ marginTop: 5 ,maxWidth: 350, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)", 
                        transition: "transform 0.3s, box-shadow 0.3s",
                            "&:hover": {
                                transform: "translateY(-5px)",
                                boxShadow: "0px 15px 30px rgba(0,0,0,0.15)",
                            }}}>
                           <CardActionArea>
                             <CardMedia 
                                sx={{ height: 150 }}
                                image={ image }
                                title={ title }
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5' component="div">
                                    { title }
                                </Typography>
                                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                                    { description }                                     
                                </Typography>
                                <Typography variant='body2' sx={{ marginTop: "5px" }}>
                                    <strong>R${ price } </strong>                                     
                                </Typography>
                            </CardContent>
                           </CardActionArea>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};


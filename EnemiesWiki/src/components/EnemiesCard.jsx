import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function EnemiesCard() {
    const { state } = useLocation();
    const enemy = state?.enemy;

    if (!enemy) {
        return <div>No enemy data available.</div>;
    }

    return (
        <div>
            <Card sx={{ maxWidth: 345 }} key={enemy.id}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={enemy.image}
                        alt={enemy.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {enemy.name}
                        </Typography>
                        <Typography variant="h6" component="div">
                            {enemy.variantOf}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {enemy.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default EnemiesCard;

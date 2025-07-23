import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token requerido o mal formado' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Error al verificar el token:', error.message);
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
};

export default authenticate;

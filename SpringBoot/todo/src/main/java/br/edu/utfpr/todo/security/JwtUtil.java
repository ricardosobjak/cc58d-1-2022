package br.edu.utfpr.todo.security;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.Map;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;

public class JwtUtil {
    private static final String SECRET = "my@#$$%#4345secret";



    public static String createToken(Map<String, Object> payloadClaims, long TIMEOUT) throws JWTCreationException {
        final Instant now = Instant.now();

        Algorithm algorithm = Algorithm.HMAC256(SECRET);

        return JWT.create()
                .withIssuedAt(Date.from(now))
                .withExpiresAt(Date.from(now.plus(TIMEOUT, ChronoUnit.SECONDS)))
                .withPayload(payloadClaims)
                .sign(algorithm);
    }
/*
    public static Map<String, Object> decode(String token)
            throws InvalidKeyException, NoSuchAlgorithmException,
            IllegalStateException, SignatureException, IOException,
            JWTVerifyException {
        JWTVerifier verifier = new JWTVerifier(SECRET);

        Map<String, Object> map = verifier.verify(token);

        return map;
    }
    */
}

package com.sena.proyect.hermes.of.cheese.presentation.security;

import com.sena.proyect.hermes.of.cheese.persistence.entity.User;
import com.sena.proyect.hermes.of.cheese.persistence.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    SimpleGrantedAuthority authority = new SimpleGrantedAuthority("ADMIN");

    Set<SimpleGrantedAuthority> authorities = new HashSet<>();


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        if (user.isStatus()) {
            return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), getAuthority(authorities));
        }
        throw new UsernameNotFoundException("User not found");
    }

    private Collection<? extends GrantedAuthority> getAuthority(Set<SimpleGrantedAuthority> roles) {
        roles.add(authority);
        return roles;
    }

}

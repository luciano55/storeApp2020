package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.HashMap;
import java.util.Map;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
//import org.hibernate.cfg.Configuration;
import org.hibernate.jpa.internal.util.PersistenceUtilHelper.MetadataCache;
import org.hibernate.service.ServiceRegistry;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AccessHibernateTest {

  @Test
  void contextLoads() {
    Session session = getCurrentSession();
    ((SessionFactory) session).openSession();
    boolean a = true;
    // System.out.println(cpsJson);
    assertEquals(true, a);
  }

  public static Session getCurrentSession() {
    // Hibernate 5.4 SessionFactory example without XML
    Map<String, String> settings = new HashMap<>();
    settings.put("connection.driver_class", "com.mysql.jdbc.Driver");
    settings.put("dialect", "org.hibernate.dialect.MySQL8Dialect");
    settings.put("hibernate.connection.url", "jdbc:mysql://localhost/mobile_store_2021_view");
    settings.put("hibernate.connection.username", "root");
    settings.put("hibernate.connection.password", "");
    settings.put("hibernate.current_session_context_class", "thread");
    settings.put("hibernate.show_sql", "true");
    settings.put("hibernate.format_sql", "true");

    ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder().applySettings(settings).build();

    MetadataSources metadataSources = new MetadataSources(serviceRegistry);
    // metadataSources.addAnnotatedClass(Player.class);
    MetadataCache metadata = (MetadataCache) metadataSources.buildMetadata();

    // here we build the SessionFactory (Hibernate 5.4)
    SessionFactory sessionFactory = ((Metadata) metadata).getSessionFactoryBuilder().build();
    Session session = sessionFactory.getCurrentSession();
    return session;
  }

}

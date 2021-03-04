package com.mon3goo.conduminium;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.mon3goo.conduminium");

        noClasses()
            .that()
            .resideInAnyPackage("com.mon3goo.conduminium.service..")
            .or()
            .resideInAnyPackage("com.mon3goo.conduminium.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..com.mon3goo.conduminium.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}

import { UserEntity } from "../databases/mysql/user.entity";
import { UserRepository } from "../repositories/user.repository";
import { UserToCreateDTO } from "../types/user/dtos";

export class UserService {
  private userRepository: UserRepository = new UserRepository();

  async registerUser(userToCreate: UserToCreateDTO): Promise<UserEntity> {
    // ON CHECK SI L'UTILISATEUR EXISTE DÉJÀ DANS LE REPOSITORY
    const existingUser = await this.userRepository.findUserByEmail(userToCreate.email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }
    // ON HASH LE MOT DE PASSE
    const password_hash = "hash du mot de passe";
    // ON CRÉE L'UTILISATEUR
    
    const createdUser = this.userRepository.createUser({...userToCreate, password_hash});

    // ON SAUVEGARDE L'UTILISATEUR
    const savedUser = await this.userRepository.save(createdUser);

    // APPELER LE EMAIL SERVICE POUR ENVOYER UNE NOTIFICATION DE CREATION DE COMPTE A L'UTILISATEUR NOUVELLEMENT CRÉÉ

    // ON RETOURNE L'UTILISATEUR CRÉÉ
    return savedUser;
  }
}
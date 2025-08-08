 @staticmethod
    def find_global_volume_accumulator() -> Pubkey:
        """
        Derive the Program Derived Address (PDA) for the global volume accumulator.
        
        Returns:
            Pubkey of the derived global volume accumulator account
        """
        derived_address, _ = Pubkey.find_program_address(
            [b"global_volume_accumulator"],
            PumpAddresses.PROGRAM,
        )
        return derived_address

    @staticmethod
    def find_user_volume_accumulator(user: Pubkey) -> Pubkey:
        """
        Derive the Program Derived Address (PDA) for a user's volume accumulator.
        
        Args:
            user: Pubkey of the user account
            
        Returns:
            Pubkey of the derived user volume accumulator account
        """
        derived_address, _ = Pubkey.find_program_address(
            [b"user_volume_accumulator", bytes(user)],
            PumpAddresses.PROGRAM,
        )
        return derived_address
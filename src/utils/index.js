import VectorIcon from "../components/Atoms/VectorIcon";

export const getIconFamily = (family, name, size, color) => {
  switch (family) {
    case "AntDesign":
      return <VectorIcon.AntDesign name={name} size={size} color={color} />;
    case "Entypo":
      return <VectorIcon.Entypo name={name} size={size} color={color} />;
    case "Feather":
      return <VectorIcon.Feather name={name} size={size} color={color} />;
    case "FontAwesome":
      return <VectorIcon.FontAwesome name={name} size={size} color={color} />;
    case "FontAwesome5":
      return <VectorIcon.FontAwesome5 name={name} size={size} color={color} />;
    case "Fontisto":
      return <VectorIcon.Fontisto name={name} size={size} color={color} />;

    case "Foundation":
      return <VectorIcon.Foundation name={name} size={size} color={color} />;

    case "Ionicons":
      return <VectorIcon.Ionicons name={name} size={size} color={color} />;

    case "MaterialCommunityIcons":
      return (
        <VectorIcon.MaterialCommunityIcons
          name={name}
          size={size}
          color={color}
        />
      );

    case "MaterialIcons":
      return <VectorIcon.MaterialIcons name={name} size={size} color={color} />;

    case "Octicons":
      return <VectorIcon.Octicons name={name} size={size} color={color} />;

    case "SimpleLineIcons":
      return (
        <VectorIcon.SimpleLineIcons name={name} size={size} color={color} />
      );

    case "Zocial":
      return <VectorIcon.Zocial name={name} size={size} color={color} />;

    default:
      return <VectorIcon.AntDesign name={name} size={size} color={color} />;
  }
};
